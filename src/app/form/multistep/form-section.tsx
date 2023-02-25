import { ReactNode } from "react";

export default function FormSection({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-stone-200 dark:bg-stone-700 -mx-6">
      <div className="flex flex-col space-y-6">{children}</div>
    </div>
  );
}
