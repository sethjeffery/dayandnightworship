import Input from "./input";
import TextareaAutosize from "react-textarea-autosize";
import { FormFieldsStepModel } from "../model/types";
import RadioGroup from "./radio-group";
import match from "../conditions/match";
import CheckboxGroup from "./checkbox-group";
import { useMemo } from "react";
import { useFormikContext } from "formik";
import { FormValues as FV } from "../model/form-values";
import { FormFieldModel } from "./types";

interface FieldsStepProps<T extends FV> {
  step: FormFieldsStepModel<T>;
}

function StepField<T extends FV>({ field }: { field: FormFieldModel<T> }) {
  switch (field.type) {
    case "radio":
      return <RadioGroup {...field} />;
    case "checkbox":
      return <CheckboxGroup {...field} />;
    case "textarea":
      return <Input minRows={2} as={TextareaAutosize} {...field} />;
    default:
      return <Input {...field} />;
  }
}

export default function FieldsStep<T extends FV>({ step }: FieldsStepProps<T>) {
  const { values } = useFormikContext<T>();
  const visibleFields = useMemo(
    () =>
      step.fields
        .filter(({ conditions }) => !conditions || match(conditions, values))
        .map((field, index) => ({ ...field, autoFocus: index === 0 })),
    [step.fields, values]
  );

  return (
    <>
      {(step.title || step.title) && (
        <div className="space-y-2">
          {step.title && <div className="text-xl">{step.title}</div>}
          {step.subtitle && (
            <div className="text-lg opacity-60">{step.subtitle}</div>
          )}
        </div>
      )}
      {visibleFields.map((field) => (
        <StepField field={field} key={field.name} />
      ))}
    </>
  );
}
