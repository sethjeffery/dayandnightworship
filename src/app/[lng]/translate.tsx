import get from "lodash/get";
import Format from "./format";

const fallbackLng = "fr";

interface I18nProps {
  lng: string;
  i18n: any;
  code: string;
  formatted?: boolean;
  interpolate?: Record<string, JSX.Element | string>;
}

const Translate = ({
  lng,
  i18n,
  code,
  formatted,
  interpolate = {},
}: I18nProps) => {
  return (
    <>
      {formatted ? (
        <Format interpolate={interpolate} text={t({ lng, i18n, code })} />
      ) : (
        t({ lng, i18n, code })
      )}
    </>
  );
};

export const t = ({ lng, i18n, code }: I18nProps): string =>
  get(i18n[lng], code) || get(i18n[fallbackLng], code);

export const tArray = ({ lng, i18n, code }: I18nProps): string[] =>
  get(i18n[lng], code) || get(i18n[fallbackLng], code);

export default Translate;
