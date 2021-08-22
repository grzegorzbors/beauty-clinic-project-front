import NewAppointmentForm from "../components/AppointmentForm/NewAppointmentForm";
import appointment from "../styles/appointment";
import Grid from "@material-ui/core/Grid";

const Appointment = () => {
  const appointmentStyles = appointment();
  return (
    <Grid container item className={appointmentStyles.appointmentPageContainer}>
      <Grid
        className={appointmentStyles.appointmentContainer}
        item
        xs={6}
        md={7}
      >
        <h2 className={appointmentStyles.appointmentHeader}>
          Umów wizytę jako gość
        </h2>
        <NewAppointmentForm />
      </Grid>
      <Grid item xs={6} md={5} className={appointmentStyles.imageContainer}>
        <div className={appointmentStyles.image}></div>
      </Grid>
    </Grid>
  );
};

export default Appointment;
