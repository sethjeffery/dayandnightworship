"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import FlagFr from "@/app/assets/flag-fr.svg";
import FlagEn from "@/app/assets/flag-en.svg";
import NavbarI18nLink from "./navbar-i18n-link";
import DropdownArrow from "@/app/assets/dropdown-arrow.svg";
import { useClickAway, useMountedState } from "react-use";

export default function NavbarI18n({ lng }: { lng: string }) {
  const isMounted = useMountedState();
  const [isOpen, setIsOpen] = useState(false);
  const Flag = lng === "en" ? FlagEn : FlagFr;
  const refI18nArea = useRef(null);
  useClickAway(refI18nArea, () => isMounted() && setIsOpen(false));
  const handleToggle = () => isMounted() && setIsOpen(!isOpen);

  return (
    <li className="relative" ref={refI18nArea}>
      <button onClick={handleToggle} className="block p-3 md:p-0">
        <span className="flex items-center gap-1 cursor-pointer">
          <Flag height="24" width="24" />
          <DropdownArrow className="w-4 h-4" />
        </span>
      </button>
      <div
        className={twMerge(
          "md:transition-all md:absolute top-full md:mt-6 right-0 text-left font-sans bg-white dark:bg-[rgba(0,0,0,0.8)] rounded-lg md:shadow-lg origin-top",
          isOpen
            ? "opacity-100 scale-100"
            : "hidden md:block opacity-0 invisible scale-75"
        )}
      >
        <ul className="md:py-2">
          <NavbarI18nLink Flag={FlagFr} lng="fr" text="Français" />
          <NavbarI18nLink Flag={FlagEn} lng="en" text="English" />
        </ul>
      </div>
    </li>
  );
}
