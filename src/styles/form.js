import { makeStyles } from "@material-ui/core/styles";

const form = makeStyles((theme) => ({
  newAppointmentForm: {
    margin: "0 auto",
    minHeight: "30rem",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  errorMessage: {
    color: "red",
    fontSize: ".8rem",
  },
  select: {
    fontFamily: "inherit",
    padding: "2px",
    margin: "2px 0",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default form;
