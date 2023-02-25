import { useMemo } from "react";
import * as yup from "yup";
import { t as translate } from "../../[lng]/translate";
import i18n from "../form.yml";
import { FormFieldsStepModel } from "../model/types";
import Step from "./step";
import { StepProps } from "./types";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepStay({ lng, ...props }: StepProps) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        stay: yup.string().required(t(lng, "stay.required")),
      }),
    [lng]
  );

  type Values = yup.InferType<typeof schema>;
  const step = useMemo<FormFieldsStepModel<Values>>(() => {
    if (parseInt(props.values.age) >= 13) {
      return {
        type: "fields",
        title: t(lng, "stay.title"),
        subtitle: t(lng, "stay.subtitle"),
        fields: [
          {
            name: "stay",
            type: "radio",
            required: true,
            choices: [
              { text: t(lng, "stay_full"), value: "500" },
              { text: t(lng, "stay_days"), value: "350" },
            ],
          },
        ],
      };
    } else if (parseInt(props.values.age) >= 3) {
      return {
        type: "fields",
        title: t(lng, "stay_youth.title"),
        subtitle: t(lng, "stay_youth.subtitle"),
        fields: [
          {
            name: "stay",
            type: "radio",
            required: true,
            choices: [
              {
                text: t(lng, "stay_youth_full"),
                value: "250",
              },
              {
                text: t(lng, "stay_youth_days"),
                value: "175",
              },
            ],
          },
        ],
      };
    } else {
      return {
        type: "fields",
        title: t(lng, "stay_infant.title"),
        subtitle: t(lng, "stay_infant.subtitle"),
        fields: [
          {
            name: "stay",
            type: "radio",
            required: true,
            choices: [
              {
                text: t(lng, "stay_infant_full"),
                value: "0",
              },
            ],
          },
        ],
      };
    }
  }, [props.values.age, lng]);

  return <Step {...props} step={step} lng={lng} validationSchema={schema} />;
}
