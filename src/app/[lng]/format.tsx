import { Fragment } from "react";

const cleanRx = (regex: RegExp) => regex.source.replace(/[()]/g, "");
const INTERPOLATION = /{{(\s*([a-zA-Z0-9_]+?)\s*)}}/;
const BOLD = /\*+([^*]+?)\*+/;
const REGEX = new RegExp(`(${cleanRx(INTERPOLATION)}|${cleanRx(BOLD)})`, "g");

const splitParagraphs = (str: string) => str.split(/\n\n/);
const splitFormattings = (str: string) => str.split(REGEX).filter((s) => s);

const applyFormatting = (
  part: string,
  interpolate: Record<string, JSX.Element | string>
) => {
  if (part.match(INTERPOLATION)) {
    return interpolate[part.replace(INTERPOLATION, "$1")];
  } else if (part.match(BOLD)) {
    return <strong className="font-bold">{part.replace(BOLD, "$1")}</strong>;
  } else {
    return part;
  }
};

interface FormatProps {
  text: string;
  interpolate: Record<string, JSX.Element | string>;
}

/**
 * VERY simple ReactJS markdown formatter.
 */
export default function Format({ text, interpolate }: FormatProps) {
  return (
    <>
      {splitParagraphs(text).map((p, index) => (
        <p key={index}>
          {splitFormattings(p).map((part, index) => (
            <Fragment key={index}>
              {applyFormatting(part, interpolate)}
            </Fragment>
          ))}
        </p>
      ))}
    </>
  );
}
