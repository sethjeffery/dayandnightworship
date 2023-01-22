import { ReactNode } from "react";
import Section from "./section";

interface SevenDaysHeaderProp {
  title: string;
  children: ReactNode;
}

export default function SevenDaysHeader({
  title,
  children,
}: SevenDaysHeaderProp) {
  return (
    <Section container="xl">
      <h1 className="text-4xl md:text-6xl text-center">{title}</h1>
      <div className="text-2xl md:text-4xl text-center text-primary">
        {children}
      </div>
    </Section>
  );
}
