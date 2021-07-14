import { Formik } from "formik";
import form from "../styles/form";
import axios from "axios";

const NewAppointmentForm = () => {
  const appointmentFormStyles = form();
  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }}
      validate={(values) => {
        const errors = {};
        // mail error
        if (!values.email) {
          errors.email = "Pole wymagane";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        // first name
        if (!values.firstName) {
          errors.firstName = "Pole wymagane";
        }
        // last name
        if (!values.lastName) {
          errors.lastName = "Pole wymagane";
        }
        // phone
        if (!values.phone) {
          errors.phone = "Pole wymagane";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios({
          method: "post",
          url: "myurl",
          data: JSON.stringify(values, null, 2),
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            //handle success
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          className={appointmentFormStyles.newAppointmentForm}
          onSubmit={handleSubmit}
        >
          <label htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.date}
          />
          <label htmlFor="time">Godzina</label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.time}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="firstName">Imię</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          <label htmlFor="lastName">Nazwisko</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && errors.lastName}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && errors.phone}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewAppointmentForm;
