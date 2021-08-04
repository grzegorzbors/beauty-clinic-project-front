import { useEffect, useState } from "react";
import { Formik } from "formik";
import form from "../styles/form";
import axios from "axios";
import { testDB, urls } from "../api/urls";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewAppointmentForm = () => {
  const [servicesList, setServicesList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const appointmentFormStyles = form();

  const validationMessage = (msg) => (
    <div className={appointmentFormStyles.redValidationMessage}>{msg}</div>
  );

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
      validate={(values) => {
        // error validation
        const errors = {};
        if (!values.date) {
          errors.date = "Data wymagana";
        }
        if (!values.time) {
          errors.time = "Godzina wymagana";
        }
        if (!values.serviceType) {
          errors.serviceType = "Wybierz typ usługi";
        }
        if (!values.doctor) {
          errors.doctor = "Wybierz specjalistę";
        }
        if (!values.email) {
          errors.email = "Email wymagany";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.firstName) {
          errors.firstName = "Imię wymagane";
        }
        if (!values.lastName) {
          errors.lastName = "Nazwisko wymagane";
        }
        if (!values.phone) {
          errors.phone = "Telefon wymagany";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await axios({
            method: "POST",
            url: `${testDB}${urls.APPOINTMENTSa}`,
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <form
          className={appointmentFormStyles.newAppointmentForm}
          onSubmit={handleSubmit}
        >
          <InputLabel htmlFor="date">Data</InputLabel>
          <TextField
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.date && errors.date && validationMessage(errors.date)}
          <InputLabel htmlFor="time">Godzina</InputLabel>
          <TextField
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.time && errors.time && validationMessage(errors.time)}
          <InputLabel htmlFor="serviceType">Typ usługi</InputLabel>
          <Select
            id="serviceType"
            name="serviceType"
            defaultValue=""
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {servicesDropDown}
          </Select>
          {touched.serviceType &&
            errors.serviceType &&
            validationMessage(errors.serviceType)}
          <InputLabel htmlFor="doctor">Specjalista</InputLabel>
          <Select
            id="doctor"
            name="doctor"
            defaultValue=""
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {doctorsDropDown}
          </Select>
          {touched.doctor && errors.doctor && validationMessage(errors.doctor)}
          <InputLabel htmlFor="firstName">Imię</InputLabel>
          <TextField
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {touched.firstName &&
            errors.firstName &&
            validationMessage(errors.firstName)}
          <InputLabel htmlFor="lastName">Nazwisko</InputLabel>
          <TextField
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {touched.lastName &&
            errors.lastName &&
            validationMessage(errors.lastName)}
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && validationMessage(errors.email)}
          <InputLabel htmlFor="phone">Telefon</InputLabel>
          <TextField
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {touched.phone && errors.phone && validationMessage(errors.phone)}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
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
          {isSubmitting && <p>Umawianie wizyty...</p>}
        </form>
      )}
    </Formik>
  );
};

export default NewAppointmentForm;
