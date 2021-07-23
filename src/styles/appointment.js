import { makeStyles } from "@material-ui/core/styles";

const appointment = makeStyles((theme) => ({
  appointmentPageContainer: {
    justifyItems: "center",
    padding: "2rem",
    minHeight: "500px",
  },
  appointmentContainer: {
    justifyContent: "center",
  },
  appointmentFormContainer: {
    justifyContent: "center",
  },
  chooseSpecialistHeader: {
    margin: 0,
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  appointmentImage: {
    maxWidth: "100%",
  },
}));

export default appointment;
