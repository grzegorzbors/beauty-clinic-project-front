import { makeStyles } from "@material-ui/core/styles";

const form = makeStyles((theme) => ({
  newAppointmentForm: {
    margin: "0 auto",
    minHeight: "30rem",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  redValidationMessage: {
    color: "red",
    fontSize: ".8rem",
    fontWeight: "900",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default form;
