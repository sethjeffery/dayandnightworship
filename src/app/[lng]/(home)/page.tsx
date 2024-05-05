import { performRequest } from "@/lib/datocms";
import Video from "./video";

const graphql = String.raw;

const PAGE_CONTENT_QUERY = graphql`
  query MyQuery {
    upload(filter: { filename: { matches: { pattern: "glory" } } }) {
      filename
      video {
        streamingUrl
        mp4High: mp4Url(res: high)
        mp4Med: mp4Url(res: medium)
        mp4Low: mp4Url(res: low)
        duration
        framerate
        thumbJpg: thumbnailUrl(format: jpg)
        thumbPng: thumbnailUrl(format: png)
        thumbGif: thumbnailUrl(format: gif)
      }
    }
  }
`;

export default async function Home() {
  const {
    data: {
      upload: { video },
    },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <main className="w-dvw h-dvh flex items-center justify-center relative flex-col">
      <Video videoUrl={video.mp4High} />
      <div className="z-10 relative text-center">
        <h1 className="text-[max(3rem,4vw)] leading-none text-white">
          Day and Night Worship
        </h1>
        <h2 className="text-[max(6rem,10vw)] leading-tight font-extrabold text-white">
          2025
        </h2>
      </div>
    </main>
  );
}
