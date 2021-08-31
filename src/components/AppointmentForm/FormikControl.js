import FormField from "./FormField";
import Select from "./Select";

const FormikControl = (props) => {
  const { controlType, ...rest } = props;
  switch (controlType) {
    case "input":
      return <FormField {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
