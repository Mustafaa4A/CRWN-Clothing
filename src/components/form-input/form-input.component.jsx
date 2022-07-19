import { Group, Inputs, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherPeopsValues }) => {
  return (
    <Group>
      <Inputs {...otherPeopsValues} />
      {label && (
        <FormInputLabel shrink={otherPeopsValues.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
