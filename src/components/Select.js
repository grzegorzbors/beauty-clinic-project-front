import { InputLabel } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import useStyles from "../styles/form";

const Select = ({ label, name, options, ...props }) => {
  const selectStyles = useStyles();

  const dropDown = options.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Field as="select" id={name} name={name} {...props}>
        <option value={""}>Wybierz...</option>
        {dropDown}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className={selectStyles.redValidationMessage}>{msg}</div>
        )}
      />
    </>
  );
};

export default Select;
