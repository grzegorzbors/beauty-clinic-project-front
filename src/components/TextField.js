import { InputLabel, TextField as InputField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <InputField type={type} {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name} />
    </>
  );
};

export default TextField;
