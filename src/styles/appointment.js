import { makeStyles } from "@material-ui/core/styles";
import appointmentImage from "../assets/img/appointment-pexels-gustavo-fring-3985299.jpg";

const appointment = makeStyles((theme) => ({
  appointmentPageContainer: {
    justifyContent: "center",
    padding: "2rem",
  },
  appointmentContainer: {
    padding: "0 1rem 1.5rem 1rem",
    border: "1px solid black",
    borderRadius: "15px",
    boxShadow: "2px 2px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
  appointmentHeader: {
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "flex-end",
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
