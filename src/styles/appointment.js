import { makeStyles } from "@material-ui/core/styles";
import appointmentImage from "../assets/img/appointment-pexels-gustavo-fring-3985299.jpg";

const appointment = makeStyles((theme) => ({
  appointmentPageContainer: {
    justifyContent: "center",
    padding: "2rem",
    minHeight: "630px",
    margin: "0px",
  },
  appointmentContainer: {
    padding: "0 1rem 1rem 1rem",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "15px",
  },
  appointmentHeaderContainer: {
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentHeader: {
    margin: "0px",
  },
  appointmentFormContainer: {
    justifyContent: "center",
  },
  chooseSpecialistContainer: {
    border: "1px solid black",
    borderRadius: "15px",
  },
  chooseSpecialistHeader: {
    margin: 0,
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundImage: `url(${appointmentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "90%",
    height: "90%",
  },
}));

export default appointment;
