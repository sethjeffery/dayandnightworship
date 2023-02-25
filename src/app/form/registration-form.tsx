import CloseIcon from "../assets/close.svg";
import Translate from "../[lng]/translate";
import i18n from "./form.yml";
import Multistep from "./multistep/multistep";
import { ModalFormProps } from "./types";

export default function RegistrationForm({ lng, onClose }: ModalFormProps) {
  return (
    <>
      <div className="flex w-full justify-between items-center mb-5">
        <h2 className="text-2xl md:text-3xl">
          <Translate i18n={i18n} lng={lng} code="title" />
        </h2>
        <button onClick={onClose}>
          <CloseIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
      <Multistep lng={lng} onClose={onClose} />
    </>
  );
}
