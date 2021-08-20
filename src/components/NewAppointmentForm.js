import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "./TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

import { testDB, urls } from "../api/urls";
import form from "../styles/form";

const NewAppointmentForm = () => {
  const [servicesList, setServicesList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const appointmentFormStyles = form();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
    date: Yup.string().required("Wybierz datę"),
    time: Yup.string().required("Wybierz godzinę"),
    serviceType: Yup.string().required("Wybierz usługę"),
    doctor: Yup.string().required("Wybierz specjalistę"),
    firstName: Yup.string()
      .max(15, "Dopuszczalna długość 15 liter")
      .required("Wymagane"),
    lastName: Yup.string()
      .max(20, "Dopuszczalna długość 20 liter")
      .required("Wymagane"),
    email: Yup.string().email("Niepoprawny adres").required("Wymagane"),
    phone: Yup.string()
      .matches(phoneRegExp, "Niepoprawny numer")
      .required("Wymagane"),
  });

  console.log("form");

  // const validationMessage = (msg) => (
  //   <div className={appointmentFormStyles.redValidationMessage}>{msg}</div>
  // );

  const fetchServicesList = async () => {
    try {
      const response = await axios.get(`${testDB}${urls.SERVICES}`);
      setServicesList(response.data);
    } catch {
      setIsError(true);
    }
  };

  const fetchDoctorsList = async () => {
    try {
      const response = await axios.get(`${testDB}${urls.DOCTORS}`);
      setDoctorsList(response.data);
    } catch {
      setIsError(true);
    }
  };

  const servicesDropDown = servicesList.map((service) => (
    <MenuItem value={service} key={service}>
      {service}
    </MenuItem>
  ));

  const doctorsDropDown = doctorsList.map((doctor) => (
    <MenuItem value={doctor} key={doctor}>
      {doctor}
    </MenuItem>
  ));

  useEffect(() => {
    fetchServicesList();
    fetchDoctorsList();
  }, []);

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        serviceType: "",
        doctor: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await axios({
            method: "POST",
            url: `${testDB}${urls.APPOINTMENTS}`,
            data: JSON.stringify(values, null, 2),
            headers: { "Content-Type": "application/json" },
          });
        } catch {
          setIsError(true);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange }) => (
        <Form className={appointmentFormStyles.newAppointmentForm}>
          <TextField label="Data" type="date" name="date" id="date" />
          <TextField label="Godzina" type="time" name="time" />
          <InputLabel htmlFor="serviceType">Typ usługi</InputLabel>
          <Select
            id="serviceType"
            name="serviceType"
            defaultValue=""
            onChange={handleChange}
          >
            {servicesDropDown}
          </Select>
          <InputLabel htmlFor="doctor">Specjalista</InputLabel>
          <Select
            id="doctor"
            name="doctor"
            defaultValue=""
            onChange={handleChange}
          >
            {doctorsDropDown}
          </Select>
          <TextField label="Imię" type="text" name="firstName" />
          <TextField
            label="Nazwisko"
            type="text"
            name="lastName"
            id="lastName"
          />
          <TextField label="Email" type="email" name="email" />
          <TextField label="Telefon" type="tel" name="phone" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // disabled={isSubmitting}
            className={appointmentFormStyles.submitButton}
          >
            Umów
          </Button>
          {isError && (
            <p className={appointmentFormStyles.redValidationMessage}>
              Błąd łączenia z serwerem. Odśwież stronę i spróbuj ponownie. Gdy
              błąd się powtarza, skontaktuj się z administratorem.
            </p>
          )}
          {/* {isSubmitting && <p>Umawianie wizyty...</p>} */}
        </Form>
      )}
    </Formik>
  );
};

export default NewAppointmentForm;
