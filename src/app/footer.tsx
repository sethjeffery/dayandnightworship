import EmailLink from "./email-link";

export default function Footer() {
  return (
    <footer className="bg-stone-200 p-6 text-center">
      <div className="text-md md:text-lg">
        <EmailLink>Contactez-nous</EmailLink>
      </div>
      <div className="text-sm md:text-md">
        &copy; 2023 Day and Night Worship
      </div>
    </footer>
  );
}
