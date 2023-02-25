"use client";

import { RegistrationForm } from "../form/dynamic";
import withModalForm from "../form/with-modal-form";
import i18n from "./navbar.yml";
import Translate from "./translate";

interface CtaProps {
  lng: string;
  onOpenModal: () => void;
}

function NavbarCta({ lng, onOpenModal }: CtaProps) {
  return (
    <>
      <li>
        <button
          onClick={onOpenModal}
          className="mt-2 md:mt-0 block whitespace-nowrap rounded bg-primary text-md text-white px-4 py-2 hover:brightness-110 animate-button-ping-primary font-sans"
        >
          <Translate i18n={i18n} lng={lng} code="register" />
        </button>
      </li>
    </>
  );
}

export default withModalForm(NavbarCta, RegistrationForm);
