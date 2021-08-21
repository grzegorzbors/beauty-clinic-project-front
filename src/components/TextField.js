import { InputLabel, TextField as InputField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import useStyles from "../styles/form";

const TextField = ({ label, type, ...props }) => {
  const textFieldStyles = useStyles();
  const [field] = useField(props);
  return (
    <>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <InputField type={type} {...field} {...props} autoComplete="off" />
      <ErrorMessage
        name={field.name}
        render={(msg) => (
          <div className={textFieldStyles.redValidationMessage}>{msg}</div>
        )}
      />
    </>
  );
};

export default TextField;
