import Translate, { t as translate } from "../../[lng]/translate";
import i18n from "../form.yml";
import FormSection from "./form-section";
import { StepProps } from "./types";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepThankyou({ lng, onNext }: StepProps) {
  return (
    <>
      <FormSection>
        <h1 className="text-2xl">{t(lng, "thankyou.title")}</h1>
        <p>{t(lng, "thankyou.subtitle")}</p>
      </FormSection>

      <div className="p-6 -mx-6 -mb-6">
        <div className="flex w-full justify-between">
          <button
            type="button"
            className="inline-block rounded py-2 font-sans bg-primary text-white px-6 ml-auto hover:brightness-110"
            onClick={() => onNext({})}
          >
            <Translate i18n={i18n} lng={lng} code="close" />
          </button>
        </div>
      </div>
    </>
  );
}
