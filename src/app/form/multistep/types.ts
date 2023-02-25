import { FormValues } from "../model/form-values";

export interface StepProps {
  onBack: () => void;
  onNext: (values: Partial<MultistepFormValues>) => void;
  lng: string;
  values: MultistepFormValues;
}

export interface MultistepFormValues extends FormValues {
  fullName: string;
  age: string;
  stay: string;
  ministry: string;
  skills: string[];
  skillsOther: string;
  motivation: string;
  email: string;
  phone: string;
}

export interface MultistepState {
  step: number;
  values: MultistepFormValues;
  history: number[];
}
