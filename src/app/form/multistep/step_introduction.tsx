import { useMemo } from "react";
import * as yup from "yup";
import { t as translate } from "../../[lng]/translate";
import i18n from "../form.yml";
import { FormFieldsStepModel } from "../model/types";
import Step from "./step";
import { StepProps } from "./types";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepIntroduction({ lng, ...props }: StepProps) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        fullName: yup.string().required(t(lng, "full_name.required")),
        age: yup.string().required(t(lng, "age.required")),
      }),
    [lng]
  );

  type Values = yup.InferType<typeof schema>;
  const step = useMemo<FormFieldsStepModel<Values>>(
    () => ({
      type: "fields",
      title: t(lng, "intro.title"),
      fields: [
        {
          name: "fullName",
          type: "text",
          placeholder: t(lng, "full_name.title"),
          required: true,
        },
        {
          name: "age",
          type: "radio",
          label: t(lng, "age.title"),
          required: true,
          choices: [
            { text: "18+", value: "18+" },
            { text: "13 - 18", value: "13-18" },
            {
              text: "3 - 12",
              value: "3-12",
              subtext: t(lng, "half_price"),
            },
            {
              text: "0 - 2",
              value: "0-2",
              subtext: t(lng, "free"),
            },
          ],
        },
      ],
    }),
    [lng]
  );

  return <Step {...props} step={step} lng={lng} validationSchema={schema} />;
}
