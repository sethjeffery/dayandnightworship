import { ErrorMessage, Field } from "formik";

export interface InputGroupProps {
  choices: {
    text: string;
    value: string;
    subtext?: string;
  }[];
  name: string;
  label?: string;
  type: "radio" | "checkbox";
}

function renderError(message: string) {
  return <div className="text-red-500">{message}</div>;
}

export default function InputGroup({
  choices,
  name,
  label,
  type,
}: InputGroupProps) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-md">{label}</label>}
      {choices.map((choice) => (
        <label
          key={choice.value}
          className="flex w-full gap-2 p-3 items-center bg-input dark:bg-input-dark cursor-pointer rounded-md shadow-sm dark:shadow-[inset_0_1px_5px_rgba(0,0,0,0.25)]"
        >
          <Field
            type={type}
            name={name}
            id={choice.value}
            value={choice.value}
          />
          <span>{choice.text}</span>
          {choice.subtext && (
            <span className="text-sm font-sans ml-auto opacity-50">
              {choice.subtext}
            </span>
          )}
        </label>
      ))}
      <ErrorMessage name={name} render={renderError} />
    </div>
  );
}
