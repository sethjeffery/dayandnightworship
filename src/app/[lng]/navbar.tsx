"use client";

import dayAndNightIcon from "@/app/assets/day-and-night-icon.png";
import LogoText from "@/app/assets/day-and-night-logo.svg";
import DropdownArrow from "@/app/assets/dropdown-arrow.svg";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { twMerge } from "tailwind-merge";
import Translate, { t } from "./translate";
import I18nLink from "./i18n-link";
import NavbarI18nLink from "./navbar-i18n-link";
import i18n from "./navbar.yml";
import FlagFr from "@/app/assets/flag-fr.svg";
import FlagEn from "@/app/assets/flag-en.svg";

interface NavbarItem {
  href: string;
  text: string;
}

type I18nNavbarItem = NavbarItem & {
  lng: string;
};

const siteUrl = "https://www.dayandnightworship.fr/";

function NavbarLink({ href, text, lng }: I18nNavbarItem) {
  return (
    <li>
      <I18nLink
        lng={lng}
        href={href}
        className="block py-2 pl-3 pr-4 text-stone-700 dark:text-stone-300 md:border-0 md:hover:text-primary md:p-0 text-md font-sans"
      >
        {text}
      </I18nLink>
    </li>
  );
}

function NavbarButton({ href, text }: NavbarItem) {
  return (
    <li>
      <a
        href={href}
        className="mt-2 md:mt-0 block whitespace-nowrap rounded bg-primary text-md text-white px-4 py-2 hover:brightness-110 animate-button-ping-primary font-sans"
      >
        {text}
      </a>
    </li>
  );
}

function NavbarI18n({ lng }: { lng: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const Flag = lng === "en" ? FlagEn : FlagFr;
  const refI18nArea = useRef(null);
  useClickAway(refI18nArea, () => setIsOpen(false));

  return (
    <li className="relative" ref={refI18nArea}>
      <button onClick={() => setIsOpen(!isOpen)} className="block p-3 md:p-0">
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
          <NavbarI18nLink Flag={FlagFr} lang="fr" text="Français" />
          <NavbarI18nLink Flag={FlagEn} lang="en" text="English" />
        </ul>
      </div>
    </li>
  );
}

export default function Navbar({ lng }: { lng: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // on clicking outside navbar, close it
  const refNavbarArea = useRef(null);
  useClickAway(refNavbarArea, () => setIsOpen(false));

  const navbarItems = useMemo<NavbarItem[]>(
    () => [
      {
        href: "/",
        text: t({ lng, i18n, code: "home" }),
      },
      {
        href: "/info",
        text: t({ lng, i18n, code: "info" }),
      },
      {
        href: "/team",
        text: t({ lng, i18n, code: "team" }),
      },
      {
        href: "/pricing",
        text: t({ lng, i18n, code: "pricing" }),
      },
    ],
    [lng]
  );

  return (
    <nav className="bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(18,17,17,0.75)] backdrop-blur-lg backdrop-brightness-150 border-stone-200 dark:border-stone-700 px-2 sm:px-4 py-2.5 sticky top-0 shadow z-10">
      <div
        className="grid grid-cols-[1fr_40px] md:flex items-center justify-between mx-auto"
        ref={refNavbarArea}
      >
        <a href={siteUrl} className="flex items-center gap-2 mr-8">
          <Image
            src={dayAndNightIcon}
            alt="Day and Night Worship icon"
            width="32"
            height="32"
          />
          <span className="self-center text-xl whitespace-nowrap">
            <LogoText
              aria-label="Day and Night Worship"
              className="max-w-full"
            />
          </span>
          <span className="hidden lg:inline opacity-50 pt-[2px] text-xl whitespace-nowrap">
            <Translate code="school_of_worship" lng={lng} i18n={i18n} />
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:hover:bg-stone-800 dark:focus:ring-stone-700"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-full md:block md:w-auto col-span-2`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-stone-100 dark:border-stone-700 rounded-lg bg-white dark:bg-[rgba(0,0,0,0.25)] md:bg-transparent md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navbarItems.map((navbarItem) => (
              <NavbarLink key={navbarItem.text} {...navbarItem} lng={lng} />
            ))}
            <NavbarI18n lng={lng} />
            <NavbarButton
              href="https://sg5uurechhp.typeform.com/to/V2wr070P"
              text={t({ lng, i18n, code: "register" })}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
