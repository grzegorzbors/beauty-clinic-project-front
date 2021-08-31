import * as Yup from "yup";
import format from "date-fns/format";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const requiredText = "Pole wymagane";

export const appointmentValidation = Yup.object({
  date: Yup.string().required(requiredText),
  time: Yup.string().required(requiredText),
  serviceType: Yup.string().required(requiredText),
  doctor: Yup.string().required(requiredText),
  firstName: Yup.string()
    .max(15, "Dopuszczalna długość 15 liter")
    .required(requiredText),
  lastName: Yup.string()
    .max(20, "Dopuszczalna długość 20 liter")
    .required(requiredText),
  email: Yup.string().email("Niepoprawny adres").required(requiredText),
  phone: Yup.string()
    .matches(phoneRegExp, "Niepoprawny numer")
    .required(requiredText),
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
