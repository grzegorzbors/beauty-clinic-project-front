import { makeStyles } from "@material-ui/core/styles";

const form = makeStyles((theme) => ({
  newAppointmentForm: {
    margin: "0 auto",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  redErrorMessage: {
    color: "red",
    fontSize: ".8rem",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default form;
