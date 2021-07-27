import NewAppointmentForm from "../components/NewAppointmentForm";
import appointment from "../styles/appointment";
import Grid from "@material-ui/core/Grid";

const Appointment = () => {
  const appointmentStyles = appointment();
  return (
    <Grid container item className={appointmentStyles.appointmentPageContainer}>
      <Grid
        className={appointmentStyles.appointmentContainer}
        container
        item={true}
        xs={7}
        spacing={2}
      >
        <Grid
          container
          className={appointmentStyles.appointmentHeaderContainer}
        >
          <h2 className={appointmentStyles.appointmentHeader}>
            Umów wizytę jako gość
          </h2>
        </Grid>
        <Grid
          item
          xs={4}
          className={appointmentStyles.appointmentFormContainer}
        >
          <NewAppointmentForm />
        </Grid>
        <Grid
          item
          xs={8}
          className={appointmentStyles.chooseSpecialistContainer}
        >
          <h3 className={appointmentStyles.chooseSpecialistHeader}>
            Wybierz dostępnego specjalistę
          </h3>
        </Grid>
      </Grid>
      <Grid item xs={5} className={appointmentStyles.imageContainer}>
        <div className={appointmentStyles.image}></div>
      </Grid>
    </Grid>
  );
};

export default Appointment;
