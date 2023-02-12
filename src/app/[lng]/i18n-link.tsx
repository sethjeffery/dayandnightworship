import Link from "next/link";
import { ComponentProps } from "react";

type I18nLinkProps = ComponentProps<typeof Link> & {
  lng: string;
};

export default function I18nLink({ lng, href, ...rest }: I18nLinkProps) {
  return <Link href={`/${lng}${href}`} {...rest} />;
}
