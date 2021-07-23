import NewAppointmentForm from "../components/NewAppointmentForm";
import appointment from "../styles/appointment";
import Grid from "@material-ui/core/Grid";
import appointmentImage from "../assets/img/appointment-pexels-gustavo-fring-3985299.jpg";

const Appointment = () => {
  const appointmentStyles = appointment();
  return (
    <Grid container className={appointmentStyles.appointmentPageContainer}>
      <Grid className={appointmentStyles.appointmentContainer} container xs={7}>
        {/* <h2>UMÓW WIZYTĘ JAKO GOŚĆ</h2> */}
        <Grid
          item
          xs={4}
          className={appointmentStyles.appointmentFormContainer}
        >
          <NewAppointmentForm />
        </Grid>
        <Grid item xs={8}>
          <h3 className={appointmentStyles.chooseSpecialistHeader}>
            Wybierz dostępnego specjalistę
          </h3>
        </Grid>
      </Grid>
      <Grid item xs={5} className={appointmentStyles.imageContainer}>
        <img
          src={appointmentImage}
          alt="doctor and patient"
          className={appointmentStyles.appointmentImage}
        />
      </Grid>
    </Grid>
  );
};

export default Appointment;
