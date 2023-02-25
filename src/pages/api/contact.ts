import sendMail from "../../send-mail";
import { NextApiRequest, NextApiResponse } from "next";
import { MultistepFormValues } from "@/app/form/multistep/types";
import Cors from "cors";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "HEAD", "OPTIONS"],
  origin: ["https://www.dayandnightworship.fr"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const data = req.body as MultistepFormValues;

  await sendMail({
    subject: "New contact",
    text: JSON.stringify(data, null, 2),
  });

  res.status(200).json({ success: true });
}
