import { Condition } from "../conditions/types";
import { FormFieldModel } from "../fields/types";
import { FormValues as FV } from "./form-values";

export interface FormFieldsStepModel<T extends FV> extends FormBaseStepModel {
  type: "fields";
  title?: string;
  subtitle?: string;
  fields: FormFieldModel<T>[];
}

export interface FormGotoStepModel extends FormBaseStepModel {
  type: "goto";
  nextStepId: string;
}

export interface FormRedirectStepModel extends FormBaseStepModel {
  type: "redirect";
  redirect: string;
}

export interface FormSubmitStepModel extends FormBaseStepModel {
  type: "submit";
  submit: string;
}

export interface FormCloseStepModel extends FormBaseStepModel {
  type: "close";
}

export interface FormBaseStepModel {
  id?: string;
  type: string;
  conditions?: Record<string, Condition>;
}

export type FormStepModel<T extends FV> =
  | FormFieldsStepModel<T>
  | FormGotoStepModel
  | FormRedirectStepModel
  | FormSubmitStepModel
  | FormCloseStepModel;

export const isFieldsStep = <T extends FV>(
  step: FormStepModel<T>
): step is FormFieldsStepModel<T> => step.type === "fields";

export const isGotoStep = <T extends FV>(
  step: FormStepModel<T>
): step is FormGotoStepModel => step.type === "goto";

export const isRedirectStep = <T extends FV>(
  step: FormStepModel<T>
): step is FormRedirectStepModel => step.type === "redirect";

export const isSubmitStep = <T extends FV>(
  step: FormStepModel<T>
): step is FormSubmitStepModel => step.type === "submit";
