import { ErrorMessage, Field, FieldConfig } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { TextareaAutosizeProps } from "react-textarea-autosize";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    HTMLInputElement | HTMLTextAreaElement
  > {
  name: string;
  label?: string;
  as?: FieldConfig["as"];
}

function renderError(message: string) {
  return <div className="text-red-500">{message}</div>;
}

export default function Input({
  name,
  label,
  id = name,
  className,
  as,
  ...rest
}: InputProps & TextareaAutosizeProps) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-md">
          {label}
        </label>
      )}
      <Field
        type="text"
        id={id}
        as={as}
        name={name}
        className={twMerge(
          "block w-full rounded-md border-gray-300 dark:border-transparent shadow-sm dark:shadow-[inset_0_1px_5px_rgba(0,0,0,0.25)] focus:border-primary dark:focus:border-transparent focus:ring focus:ring-primary focus:ring-opacity-50 bg-input dark:bg-input-dark text-black dark:text-white",
          className
        )}
        {...rest}
      />
      <ErrorMessage name={name} render={renderError} />
    </div>
  );
}
