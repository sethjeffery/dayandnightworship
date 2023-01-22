import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Widths = "md" | "lg" | "xl";

function containerClass(container?: Widths) {
  switch (container) {
    case "md":
      return "container-md";
    case "lg":
      return "container-lg";
    case "xl":
      return "container-xl";
  }
}

function centerClass(center?: boolean) {
  return center && "text-center";
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  container?: Widths;
  center?: boolean;
}

export default function Section({
  children,
  className,
  container,
  center,
  tag: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      className={twMerge(
        "my-16",
        containerClass(container),
        centerClass(center),
        className
      )}
    >
      {children}
    </Tag>
  );
}
