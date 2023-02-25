import { useMemo } from "react";
import * as yup from "yup";
import { t as translate } from "../../[lng]/translate";
import i18n from "../form.yml";
import { FormFieldsStepModel } from "../model/types";
import Step from "./step";
import { StepProps } from "./types";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepSkills({ lng, ...props }: StepProps) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        skills: yup.array(yup.string().required()),
        skillsOther: yup.string(),
      }),
    []
  );

  type Values = yup.InferType<typeof schema>;

  const step = useMemo<FormFieldsStepModel<Values>>(
    () => ({
      type: "fields",
      title: t(lng, "skills.title"),
      subtitle: t(lng, "skills.subtitle"),
      fields: [
        {
          name: "skills",
          type: "checkbox",
          choices: [
            {
              text: t(lng, "skills.singing"),
              value: "singing",
            },
            {
              text: t(lng, "skills.piano"),
              value: "piano",
            },
            {
              text: t(lng, "skills.guitar"),
              value: "guitar",
            },
            {
              text: t(lng, "skills.drums"),
              value: "drums",
            },
            {
              text: t(lng, "skills.dance"),
              value: "dance",
            },
            {
              text: t(lng, "skills.other"),
              value: "other",
            },
          ],
        },
        {
          name: "skillsOther",
          type: "textarea",
          placeholder: t(lng, "skills.other_specify"),
          conditions: {
            skills: { includes: "other" },
          },
        },
      ],
    }),
    [lng]
  );

  return <Step {...props} step={step} lng={lng} validationSchema={schema} />;
}
