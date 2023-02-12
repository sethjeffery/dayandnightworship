import Translate from "./[lng]/translate";
import i18n from "./cta.yml";

export default function Cta({ lng }: { lng: string }) {
  return (
    <div className="text-center">
      <a
        href="https://sg5uurechhp.typeform.com/to/V2wr070P"
        className="inline-block rounded bg-secondary text-2xl text-white px-6 py-3 hover:brightness-110 animate-button-ping-secondary"
      >
        <Translate i18n={i18n} lng={lng} code="sign_up" />
      </a>
    </div>
  );
}
