import { makeStyles } from "@material-ui/core/styles";

const appointment = makeStyles((theme) => ({
  appointmentPageContainer: {
    justifyContent: "center",
    padding: "2rem",
    minHeight: "630px",
    margin: "0px",
  },
  appointmentContainer: {
    justifyContent: "center",
  },
  appointmentFormContainer: {
    justifyContent: "center",
  },
  chooseSpecialistContainer: {
    border: "1px solid black",
  },
  chooseSpecialistHeader: {
    margin: 0,
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentImage: {
    maxWidth: "90%",
  },
}));

export default appointment;
