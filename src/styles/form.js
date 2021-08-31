import { makeStyles } from "@material-ui/core/styles";

const form = makeStyles((theme) => ({
  newAppointmentForm: {
    alignSelf: "center",
    minHeight: "30rem",
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  errorMessage: {
    color: "red",
    fontSize: ".8rem",
    margin: 0,
    padding: 0,
  },
  select: {
    fontFamily: "inherit",
    padding: "2px",
    margin: "2px 0",
    width: "100%",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default form;
