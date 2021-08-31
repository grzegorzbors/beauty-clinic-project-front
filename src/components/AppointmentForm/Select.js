import { InputLabel } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

import useStyles from "../../styles/form";

const Select = ({ label, name, options, ...rest }) => {
  const selectStyles = useStyles();
  const dropDown = options.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Field
        className={selectStyles.select}
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        <option value={""}>Wybierz...</option>
        {dropDown}
      </Field>
      <ErrorMessage name={name} render={(msg) => <ErrorText msg={msg} />} />
    </div>
  );
};

export default Select;
