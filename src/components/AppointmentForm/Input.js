import { InputLabel, TextField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = ({ label, type, ...rest }) => {
  const [field] = useField(rest);
  return (
    <>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <TextField type={type} {...field} {...rest} autoComplete="off" />
      <ErrorMessage
        name={field.name}
        render={(msg) => <ErrorText msg={msg} />}
      />
    </>
  );
};

export default Input;
