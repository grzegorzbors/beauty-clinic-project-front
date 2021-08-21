import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validate = Yup.object({
  date: Yup.string().required("Wybierz datę"),
  time: Yup.string().required("Wybierz godzinę"),
  serviceType: Yup.string().required("Wybierz usługę"),
  doctor: Yup.string().required("Wybierz specjalistę"),
  firstName: Yup.string()
    .max(15, "Dopuszczalna długość 15 liter")
    .required("Pole wymagane"),
  lastName: Yup.string()
    .max(20, "Dopuszczalna długość 20 liter")
    .required("Pole wymagane"),
  email: Yup.string().email("Niepoprawny adres").required("Pole wymagane"),
  phone: Yup.string()
    .matches(phoneRegExp, "Niepoprawny numer")
    .required("Pole wymagane"),
});

export const initialValues = {
  date: "",
  time: "",
  serviceType: "",
  doctor: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
