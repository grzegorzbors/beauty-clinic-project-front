import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "./TextField";
import Select from "./Select";

import { testDB, urls } from "../api/urls";
import form from "../styles/form";
import { validate, initialValues } from "../utils/formUtils";

const NewAppointmentForm = () => {
  const [servicesList, setServicesList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const appointmentFormStyles = form();

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

  const onSubmitHandler = async (values, { setSubmitting }) => {
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
  };

  useEffect(() => {
    fetchServicesList();
    fetchDoctorsList();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmitHandler}
    >
      {({ handleChange, isSubmitting }) => (
        <Form className={appointmentFormStyles.newAppointmentForm}>
          <TextField label="Data" type="date" name="date" id="date" />
          <TextField label="Godzina" type="time" name="time" />
          <InputLabel htmlFor="serviceType">Typ usługi</InputLabel>
          <Select
            name="serviceType"
            label="Usługa"
            onChange={handleChange}
            options={servicesList}
          ></Select>
          <InputLabel htmlFor="doctor">Specjalista</InputLabel>
          <Select
            name="doctor"
            onChange={handleChange}
            options={doctorsList}
          ></Select>
          <TextField label="Imię" type="text" name="firstName" />
          <TextField label="Nazwisko" type="text" name="lastName" />
          <TextField label="Email" type="email" name="email" />
          <TextField label="Telefon" type="tel" name="phone" />
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
        </Form>
      )}
    </Formik>
  );
};

export default NewAppointmentForm;
