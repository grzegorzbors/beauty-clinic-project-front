import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import axios from "axios";

import Button from "@material-ui/core/Button";
import FormikControl from "./FormikControl";

import { testDB, urls } from "../../api/urls";
import { appointmentValidation, initialValues } from "../../utils/formUtils";
import form from "../../styles/form";
import formikControls from "./formikControlsCfg";

const NewAppointmentForm = () => {
  const [servicesList, setServicesList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const appointmentFormStyles = form();
  const history = useHistory();

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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsError(false);
      setSubmitting(true);
      await axios({
        method: "POST",
        url: `${testDB}${urls.APPOINTMENTS}`,
        data: JSON.stringify(values, null, 2),
        headers: { "Content-Type": "application/json" },
      });
      history.push("/");
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
      validationSchema={appointmentValidation}
      onSubmit={handleSubmit}
    >
      {({ handleChange, isSubmitting }) => (
        <Form className={appointmentFormStyles.newAppointmentForm}>
          {formikControls.map(({ name, controlType, label, type }) => (
            <FormikControl
              key={name}
              controlType={controlType}
              onChange={handleChange}
              label={label}
              type={type}
              options={name === "serviceType" ? servicesList : doctorsList}
              name={name}
            />
          ))}
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
