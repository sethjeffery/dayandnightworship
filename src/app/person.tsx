import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Section from "./section";

interface PersonProps {
  name: string;
  children: ReactNode;
  image: StaticImageData;
  alt: string;
  quote?: boolean;
  live?: boolean;
}

export default function Person({
  children,
  name,
  image,
  alt,
  quote,
  live,
}: PersonProps) {
  const paddingClassName = quote ? "px-8 md:px-12" : "px-6 md:px-8";

  return (
    <Section container="lg" className="pt-16 md:pt-0">
      <div className="flex gap-6 md:gap-8 flex-col md:flex-row rounded-xl bg-stone-200 pb-12 md:pb-0 md:bg-transparent items-center md:items-start">
        <div>
          <Image
            src={image}
            alt={alt}
            className="rounded-full w-32 h-32 -mt-16 md:-mt-0 md:w-48 md:h-48 max-w-none"
          />
        </div>
        <div
          className={`text-xl md:text-2xl md:pl-12 max-w-md md:max-w-none ${paddingClassName}`}
        >
          <h2 className="font-bold text-center mb-2 md:text-left">
            {name}
            {live && (
              <span className="bg-red-600 text-white inline-block ml-2 px-1 font-sans text-sm font-normal">
                LIVE
              </span>
            )}
          </h2>
          {quote && (
            <div className="text-6xl md:text-8xl absolute -mt-1 md:-mt-2 -ml-7 opacity-25 md:-ml-12">
              &ldquo;
            </div>
          )}
          {children}
        </div>
      </div>
    </Section>
  );
}
