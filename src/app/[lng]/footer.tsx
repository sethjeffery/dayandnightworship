import EmailLink from "../email-link";
import i18n from "./footer.yml";
import Translate from "./translate";

export default function Footer({ lng }: { lng: string }) {
  return (
    <footer className="bg-stone-200 p-6 text-center dark:bg-stone-700">
      <div className="text-md md:text-lg">
        <EmailLink>
          <Translate i18n={i18n} lng={lng} code="contact_us" />
        </EmailLink>
      </div>
      <div className="text-sm md:text-md">
        &copy; 2023 Day and Night Worship
      </div>
    </footer>
  );
}
