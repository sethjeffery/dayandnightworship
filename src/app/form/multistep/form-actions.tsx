import { useFormikContext } from "formik";
import { twMerge } from "tailwind-merge";
import Translate from "../../[lng]/translate";
import i18n from "../form.yml";

interface FormActionsProps {
  lng: string;
  onBack: () => void;
  nextCode?: string;
}

const noop = () => {};

function FormActions({ lng, onBack, nextCode = "next" }: FormActionsProps) {
  const { isSubmitting: locked, submitForm } = useFormikContext();

  const buttonClass = twMerge(
    "inline-block rounded py-2 font-sans",
    locked && "opacity-25 pointer-events-none"
  );

  const linkButtonClass = twMerge(
    buttonClass,
    !locked && "opacity-50 hover:opacity-100 hover:underline"
  );

  const primaryButtonClass = twMerge(
    buttonClass,
    "bg-primary text-white px-6 ml-auto",
    !locked && "hover:brightness-110"
  );

  return (
    <div className="p-6 -mx-6 -mb-6">
      <div className="flex w-full justify-between">
        <button
          type="button"
          className={linkButtonClass}
          onClick={locked ? noop : onBack}
        >
          <Translate i18n={i18n} lng={lng} code="back" />
        </button>

        <button
          type="button"
          className={primaryButtonClass}
          onClick={locked ? noop : submitForm}
        >
          <Translate i18n={i18n} lng={lng} code={nextCode} />
        </button>
      </div>
    </div>
  );
}

export default FormActions;
