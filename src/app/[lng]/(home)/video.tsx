"use client";

import { useCallback, useState } from "react";

export default function Video({ videoUrl }: { videoUrl: string }) {
  const [hueRotate, setHueRotate] = useState(160);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLVideoElement>) => {
      const video = e.target as HTMLVideoElement;
      // hue goes from 170 to 200 based on mouse X-position
      setHueRotate(150 + (e.clientX / video.clientWidth) * 40);
      setBrightness(1 - (e.clientY / video.clientHeight) * 0.6);
      setContrast(1 + (e.clientY / video.clientHeight) * 1.0);
    },
    [],
  );

  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-100"
      autoPlay
      loop
      muted
      onMouseMove={handleMouseMove}
      style={{
        filter: `hue-rotate(${hueRotate}deg) saturate(1.8) brightness(${brightness}) contrast(${contrast})`,
      }}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
}
