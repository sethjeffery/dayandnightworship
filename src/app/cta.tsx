"use client";

import i18n from "./cta.yml";
import { RegistrationForm } from "./form/dynamic";
import withModalForm from "./form/with-modal-form";
import Translate from "./[lng]/translate";

interface CtaProps {
  lng: string;
  onOpenModal: () => void;
}

function Cta({ lng, onOpenModal }: CtaProps) {
  return (
    <>
      <div className="text-center">
        <button
          onClick={onOpenModal}
          className="inline-block rounded bg-secondary text-2xl text-white px-6 py-3 hover:brightness-110 animate-button-ping-secondary"
        >
          <Translate i18n={i18n} lng={lng} code="sign_up" />
        </button>
      </div>
    </>
  );
}

export default withModalForm(Cta, RegistrationForm);
