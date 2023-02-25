import { StepProps } from "./types";
import { useMemo } from "react";
import * as yup from "yup";
import { t as translate } from "../../[lng]/translate";
import i18n from "../form.yml";
import { FormFieldsStepModel } from "../model/types";
import Step from "./step";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepMotivation({ lng, ...props }: StepProps) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        motivation: yup.string(),
      }),
    []
  );

  type Values = yup.InferType<typeof schema>;
  const step = useMemo<FormFieldsStepModel<Values>>(
    () => ({
      type: "fields",
      title: t(lng, "motivation.title"),
      fields: [
        {
          name: "motivation",
          type: "textarea",
          minRows: 4,
        },
      ],
    }),
    [lng]
  );

  return <Step {...props} step={step} lng={lng} validationSchema={schema} />;
}
