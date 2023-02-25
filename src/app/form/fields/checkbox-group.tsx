import InputGroup, { InputGroupProps } from "./input-group";

type CheckboxGroupProps = Omit<InputGroupProps, "type">;

export default function CheckboxGroup(props: CheckboxGroupProps) {
  return <InputGroup {...props} type="checkbox" />;
}
