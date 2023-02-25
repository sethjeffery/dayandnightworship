import { Condition } from "../conditions/types";
import { FormValues as FV } from "../model/form-values";

export type FormFieldModel<T extends FV> =
  | TextFormFieldModel<T>
  | TextareaFormFieldModel<T>
  | GroupFormFieldModel<T>;

interface BaseFormFieldModel<T extends FV> {
  name: Extract<keyof T, string>;
  label?: string;
  conditions?: Record<string, Condition>;
  required?: boolean;
}

interface TextFormFieldModel<T extends FV> extends BaseFormFieldModel<T> {
  type: "text" | "email" | "tel";
  placeholder?: string;
}

interface TextareaFormFieldModel<T extends FV> extends BaseFormFieldModel<T> {
  type: "textarea";
  minRows?: number;
  placeholder?: string;
}

interface GroupFormFieldModel<T extends FV> extends BaseFormFieldModel<T> {
  type: "radio" | "checkbox";
  choices: { text: string; value: string; subtext?: string }[];
}
