import useStyles from "../../styles/form";

const ErrorText = ({ msg }) => {
  const textFieldStyles = useStyles();
  return <p className={textFieldStyles.errorMessage}>{msg}</p>;
};

export default ErrorText;
