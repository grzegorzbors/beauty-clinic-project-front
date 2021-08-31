import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notifyAppointmentSuccess = () => toast.success("Wizyta umówiona!");
export const notifyError = () =>
  toast.error("Błąd łączenia z serwerem. Skontaktuj się z administratorem");
