import { Form, Formik } from "formik";
import { useMemo } from "react";
import * as yup from "yup";
import { t as translate } from "../../[lng]/translate";
import FieldsStep from "../fields/fields-step";
import i18n from "../form.yml";
import FormSection from "./form-section";
import { FormFieldsStepModel } from "../model/types";
import FormActions from "./form-actions";
import { MultistepFormValues, StepProps } from "./types";

const t = (lng: string, code: string) => translate({ lng, i18n, code });

export default function StepContact({
  lng,
  values,
  onBack,
  onNext,
}: StepProps) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().required(t(lng, "email.required")),
        phone: yup.string(),
      }),
    [lng]
  );

  type Values = yup.InferType<typeof schema>;
  const step = useMemo<FormFieldsStepModel<Values>>(
    () => ({
      type: "fields",
      title: t(lng, "contact.title"),
      subtitle: t(lng, "contact.subtitle"),
      fields: [
        {
          name: "email",
          type: "email",
          label: t(lng, "email.title"),
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          label: t(lng, "phone.title"),
        },
      ],
    }),
    [lng]
  );

  const handleSubmit = (newValues: Values) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...newValues, ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => onNext(newValues));
  };

  return (
    <>
      <Formik<Values>
        initialValues={values}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <FormSection>
            <FieldsStep<MultistepFormValues> step={step} />
          </FormSection>
          <FormActions onBack={onBack} lng={lng} nextCode="submit" />
        </Form>
      </Formik>
    </>
  );
}
