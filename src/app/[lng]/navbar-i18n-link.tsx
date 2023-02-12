import { usePathname } from "next/navigation";

export default function NavbarI18nLink({
  Flag,
  lang,
  text,
}: {
  Flag: any;
  lang: string;
  text: string;
}) {
  const pathname = usePathname() || "";
  const basePath = pathname.replace(/\/[a-z]{2}\//, "/");
  const path = `/${lang}${basePath}`;

  return (
    <li>
      <a
        href={path}
        className="flex items-center gap-2 py-2 px-3 md:px-4 hover:text-primary"
      >
        <Flag height="24" width="24" className="max-w-none" />
        {text}
      </a>
    </li>
  );
}
