"use client";

import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div className="my-16 mx-auto max-w-full w-[320px] h-[200px] md:h-[400px] md:w-[640px] overflow-hidden rounded-lg shadow-lg">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=-H7K_dDvJJQ&t=1s"
        width="100%"
        height="100%"
      />
    </div>
  );
}
