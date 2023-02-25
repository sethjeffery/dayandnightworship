"use client";

import { ComponentType, ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { ModalProps } from "./modal-props";

const withPortal = (Component: ComponentType<ModalProps>) => (props: any) =>
  createPortal(
    <Component {...props} />,
    document.getElementById("modal") as HTMLElement
  );

function Modal({
  open,
  children,
  onClose,
  clickBackgroundToClose,
  align,
}: ModalProps) {
  const ref = useRef(null);
  useClickAway(ref, () => clickBackgroundToClose && onClose(), ["click"]);

  if (!open) return null;

  const boxWrapperClass = twMerge(
    "flex min-h-full items-center justify-center p-4 text-center sm:p-0",
    align === "start" ? "sm:items-start" : "sm:items-center"
  );

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 dark:bg-black bg-opacity-50 dark:bg-opacity-75 transition-opacity backdrop-blur-md"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto" ref={ref}>
        <div className={boxWrapperClass}>
          <div className="relative transform overflow-hidden rounded-lg bg-background dark:bg-background-dark text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withPortal(Modal);
