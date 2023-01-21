"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarItem {
  href: string;
  text: string;
}

const navbarItems: NavbarItem[] = [
  {
    href: "/",
    text: "Accueil",
  },
  {
    href: "/team",
    text: "Équipe",
  },
  {
    href: "/pricing",
    text: "Prix",
  },
];

const siteUrl = "https://www.dayandnightworship.fr/";

function NavbarLink({ href, text }: NavbarItem) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-stone-700 md:border-0 md:hover:text-primary md:p-0 text-md font-sans"
      >
        {text}
      </Link>
    </li>
  );
}

function NavbarButton({ href, text }: NavbarItem) {
  return (
    <li>
      <a
        href={href}
        className="block rounded bg-primary text-md text-white px-4 py-2 hover:brightness-110 animate-button-ping-primary font-sans"
      >
        {text}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(255,255,255,0.75)] backdrop-blur-lg backdrop-brightness-150 border-stone-200 px-2 sm:px-4 py-2.5 sticky top-0 shadow z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <a href={siteUrl} className="flex items-center">
          <span className="self-center text-xl whitespace-nowrap">
            Day and Night Worship
          </span>
          <span className="hidden lg:inline opacity-50">
            <span className="mx-2">|</span>
            <span className="self-center text-xl whitespace-nowrap">
              École de Louange
            </span>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200"
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-stone-100 rounded-lg bg-white md:bg-transparent md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navbarItems.map((navbarItem) => (
              <NavbarLink key={navbarItem.text} {...navbarItem} />
            ))}
            <NavbarButton
              href="https://sg5uurechhp.typeform.com/to/V2wr070P"
              text="S’inscrire !"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
