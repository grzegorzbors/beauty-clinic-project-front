import useStyles from "../../styles/form";

const ErrorText = ({ msg }) => {
  const textFieldStyles = useStyles();
  return <div className={textFieldStyles.errorMessage}>{msg}</div>;
};

export default ErrorText;
