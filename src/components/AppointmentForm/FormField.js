import { InputLabel, TextField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
import format from "date-fns/format";

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
        inputProps={{
          min: format(new Date(), "yyyy-MM-dd"),
        }}
      />
      <ErrorMessage
        name={field.name}
        render={(msg) => <ErrorText msg={msg} />}
      />
    </div>
  );
};

export default FormField;
