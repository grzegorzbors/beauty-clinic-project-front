import * as Yup from "yup";
import format from "date-fns/format";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const appointmentValidation = Yup.object({
  date: Yup.string().required("Data wymagana"),
  time: Yup.string().required("Godzina wymagana"),
  serviceType: Yup.string().required("Usługa wymagana"),
  doctor: Yup.string().required("Specjalista wymagany"),
  firstName: Yup.string()
    .max(15, "Dopuszczalna długość 15 liter")
    .required("Imię wymagane"),
  lastName: Yup.string()
    .max(20, "Dopuszczalna długość 20 liter")
    .required("Nazwisko wymagane"),
  email: Yup.string().email("Niepoprawny adres").required("Email wymagany"),
  phone: Yup.string()
    .matches(phoneRegExp, "Niepoprawny numer")
    .required("Numer wymagany"),
});

export const initialValues = {
  date: format(new Date(), "yyyy-MM-dd"),
  time: "08:30:00",
  serviceType: "",
  doctor: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
