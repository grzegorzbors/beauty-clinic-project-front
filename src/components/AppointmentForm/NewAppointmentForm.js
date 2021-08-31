import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import axios from "axios";

import Button from "@material-ui/core/Button";
import FormikControl from "./FormikControl";

import { testDB, urls } from "../../api/urls";
import { onAppointmentsFormSubmit } from "../../api/requests";
import {
  appointmentValidation,
  initialValues,
} from "../../utils/formValidationUtils";
import form from "../../styles/form";
import appointmentFormConfig from "./appointmentFormConfig";

import { notifyAppointmentSuccess, notifyError } from "../../utils/toasts";

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
      setSubmitting(true);
      await onAppointmentsFormSubmit(values);
      notifyAppointmentSuccess();
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
    isError && notifyError();
  }, [isError]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={appointmentValidation}
      onSubmit={handleSubmit}
    >
      {({ handleChange, isSubmitting }) => (
        <Form className={appointmentFormStyles.newAppointmentForm}>
          {appointmentFormConfig.map(({ name, controlType, label, type }) => (
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
          {isSubmitting && <p>Umawianie wizyty...</p>}
        </Form>
      )}
    </Formik>
  );
};

export default NewAppointmentForm;
