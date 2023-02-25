import { Form, Formik } from "formik";
import * as yup from "yup";
import FieldsStep from "../fields/fields-step";
import FormSection from "./form-section";
import { FormFieldsStepModel } from "../model/types";
import FormActions from "./form-actions";
import { MultistepFormValues, StepProps } from "./types";

export default function Step({
  step,
  values,
  onNext,
  onBack,
  lng,
  validationSchema,
}: StepProps & {
  step: FormFieldsStepModel<MultistepFormValues>;
  validationSchema: any;
}) {
  type Values = yup.InferType<typeof validationSchema>;

  return (
    <>
      <Formik<Values>
        initialValues={values}
        onSubmit={onNext}
        validationSchema={validationSchema}
      >
        <Form>
          <FormSection>
            <FieldsStep<MultistepFormValues> step={step} />
          </FormSection>
          <FormActions onBack={onBack} lng={lng} />
        </Form>
      </Formik>
    </>
  );
}
