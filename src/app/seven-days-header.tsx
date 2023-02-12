import Section from "./section";
import Translate from "./[lng]/translate";

interface SevenDaysHeaderProp {
  lng: string;
  code: string;
  i18n: any;
}

export default function SevenDaysHeader({
  lng,
  code,
  i18n,
}: SevenDaysHeaderProp) {
  return (
    <Section container="xl">
      <h1 className="text-4xl md:text-6xl text-center">
        <Translate i18n={i18n} code={`${code}.title`} lng={lng} />
      </h1>
      <div className="text-2xl md:text-4xl text-center text-primary">
        <Translate i18n={i18n} code={`${code}.subtitle`} lng={lng} />
      </div>
    </Section>
  );
}
