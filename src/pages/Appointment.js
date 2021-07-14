import NewAppointmentForm from "../components/NewAppointmentForm";
import appointment from "../styles/appointment";

const Appointment = () => {
  const appointmentStyles = appointment();
  return (
    <div className={appointmentStyles.appointment}>
      <h1>UMÓW WIZYTĘ JAKO GOŚĆ</h1>
      <NewAppointmentForm />
    </div>
  );
};

export default Appointment;
