import { FormValues } from "./model/form-values";
import { FormStepModel } from "./model/types";

export interface FormProps<T extends FormValues> {
  lng: string;
  onClose: () => void;
  steps: FormStepModel<T>[];
  initialValues: T;
}

export type GetFormModel<FormStepT extends FormStepModel<any>[]> =
  FormStepT extends FormStepModel<infer T>[] ? T : unknown;

export interface ModalFormProps {
  lng: string;
  onClose: () => void;
}
