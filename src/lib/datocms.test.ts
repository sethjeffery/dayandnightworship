import { performRequest } from "./datocms";

global.fetch = jest.fn();
process.env.NEXT_DATOCMS_API_TOKEN = "abc123";

describe("performRequest", () => {
  it("calls the DatoCMS GraphQL API with the provided query and variables", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ data: { foo: "bar" } }),
    });

    const query = "query MyQuery { foo }";
    const variables = { foo: "bar" };
    const response = await performRequest({ query, variables });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://graphql.datocms.com/", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    expect(response).toEqual({ data: { foo: "bar" } });
  });

  it("throws an error if the response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: jest
        .fn()
        .mockResolvedValueOnce({ errors: [{ message: "Not found" }] }),
    });

    const query = "query MyQuery { foo }";
    const variables = { foo: "bar" };

    await expect(performRequest({ query, variables })).rejects.toThrow(
      '404 Not Found: {"errors":[{"message":"Not found"}]}',
    );
  });
});
