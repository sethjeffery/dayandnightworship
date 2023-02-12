import Canonicals from "../canonicals";
import { PageProps } from "../page-props";
import { t } from "../translate";
import i18n from "./team.yml";

export default function Head({ params: { lng } }: PageProps) {
  const title = t({ lng, code: "team", i18n }) + " | Day and Night Worship";
  return (
    <>
      <title>{title}</title>
      <Canonicals lng={lng} path="/team" />
    </>
  );
}
