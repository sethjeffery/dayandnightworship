import { usePathname } from "next/navigation";
import I18nLink from "./i18n-link";

export default function NavbarI18nLink({
  Flag,
  lng,
  text,
}: {
  Flag: any;
  lng: string;
  text: string;
}) {
  const pathname = usePathname() || "";
  const basePath = pathname.replace(/\/[a-z]{2}(\/|$)/, "$1");

  return (
    <li>
      <I18nLink
        lng={lng}
        href={basePath}
        className="flex items-center gap-2 py-2 px-3 md:px-4 hover:text-primary"
      >
        <Flag height="24" width="24" className="max-w-none" />
        {text}
      </I18nLink>
    </li>
  );
}
