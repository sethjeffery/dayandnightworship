import InputGroup, { InputGroupProps } from "./input-group";

type RadioGroupProps = Omit<InputGroupProps, "type">;

export default function RadioGroup(props: RadioGroupProps) {
  return <InputGroup {...props} type="radio" />;
}
