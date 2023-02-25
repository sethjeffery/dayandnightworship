import dynamic from "next/dynamic";
import Spinner from "../spinner";
import { ModalFormProps } from "./types";

const loading = () => (
  <div className="flex w-full justify-center">
    <Spinner />
  </div>
);

export const RegistrationForm = dynamic<ModalFormProps>(
  () => import("./registration-form"),
  { loading }
);
