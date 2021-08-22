import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import Button from "@material-ui/core/Button";
import FormikControl from "./FormikControl";

import { testDB, urls } from "../../api/urls";
import { validate, initialValues } from "../../utils/formUtils";
import form from "../../styles/form";

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
          <FormikControl control="date" label="Data" type="date" name="date" />
          <FormikControl
            control="time"
            label="Godzina"
            type="time"
            name="time"
          />
          <FormikControl
            control="select"
            name="serviceType"
            label="Usługa"
            onChange={handleChange}
            options={servicesList}
          />
          <FormikControl
            control="select"
            name="doctor"
            label="Specjalista"
            onChange={handleChange}
            options={doctorsList}
          />
          <FormikControl
            control="text"
            label="Imię"
            type="text"
            name="firstName"
          />
          <FormikControl
            control="text"
            label="Nazwisko"
            type="text"
            name="lastName"
          />
          <FormikControl
            control="email"
            label="Email"
            type="email"
            name="email"
          />
          <FormikControl
            control="text"
            label="Telefon"
            type="tel"
            name="phone"
          />
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
            <p className={appointmentFormStyles.errorMessage}>
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
