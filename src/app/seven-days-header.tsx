import { ReactNode } from "react";

interface SevenDaysHeaderProp {
  title: string;
  children: ReactNode;
}

export default function SevenDaysHeader({
  title,
  children,
}: SevenDaysHeaderProp) {
  return (
    <div className="my-16">
      <h1 className="text-4xl md:text-6xl text-center">{title}</h1>
      <div className="text-2xl md:text-4xl text-center text-primary">
        {children}
      </div>
    </div>
  );
}
