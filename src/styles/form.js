import { makeStyles } from "@material-ui/core/styles";

const form = makeStyles((theme) => ({
  newAppointmentForm: {
    display: "flex",
    flexDirection: "column",
  },
  redErrorMessage: {
    color: "red",
    fontSize: ".8rem",
  },
}));

export default form;
