import Input from "./Input";
import Select from "./Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "text":
      return <Input {...rest} />;
    case "email":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "date":
      return <Input {...rest} />;
    case "time":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
