import { InputLabel, TextField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const FormField = ({ label, type, ...rest }) => {
  const [field] = useField(rest);
  return (
    <div>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <TextField
        type={type}
        {...field}
        {...rest}
        autoComplete="off"
        fullWidth
      />
      <ErrorMessage
        name={field.name}
        render={(msg) => <ErrorText msg={msg} />}
      />
    </div>
  );
};

export default FormField;
