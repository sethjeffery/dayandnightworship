import get from "lodash/get";
import snarkdown from "snarkdown";

const fallbackLng = "fr";

interface I18nProps {
  lng: string;
  i18n: any;
  code: string;
  formatted?: boolean;
}

const format = (str: string) =>
  str
    .split(/\n\n/)
    .map((p, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: snarkdown(p) }} />
    ));

const Translate = ({ lng, i18n, code, formatted }: I18nProps) => (
  <>{formatted ? format(t({ lng, i18n, code })) : t({ lng, i18n, code })}</>
);

export const t = ({ lng, i18n, code }: I18nProps): string =>
  get(i18n[lng], code) || get(i18n[fallbackLng], code);

export const tArray = ({ lng, i18n, code }: I18nProps): string[] =>
  get(i18n[lng], code) || get(i18n[fallbackLng], code);

export default Translate;
