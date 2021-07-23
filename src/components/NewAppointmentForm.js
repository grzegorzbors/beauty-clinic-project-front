import { Formik } from "formik";
import form from "../styles/form";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const NewAppointmentForm = () => {
  const appointmentFormStyles = form();
  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        specialisation: "",
        serviceType: "",
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
          headers: { "Content-Type": "application/json" },
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
          <InputLabel htmlFor="date">Data</InputLabel>
          <TextField
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.date}
          />
          <InputLabel htmlFor="time">Godzina</InputLabel>
          <TextField
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.time}
          />
          {errors.email && touched.email && errors.email}
          <InputLabel htmlFor="specialisation">Specjalizacja</InputLabel>
          <Select id="specialisation" name="specialisation">
            <MenuItem value="select1">Spec 1</MenuItem>
            <MenuItem value="select2">Spec 2</MenuItem>
            <MenuItem value="select3">Spec 3</MenuItem>
            <MenuItem value="select4">Spec 4</MenuItem>
          </Select>
          <InputLabel htmlFor="serviceType">Typ usługi</InputLabel>
          <Select id="serviceType" name="serviceType">
            <MenuItem value="service1">Usługa 1</MenuItem>
            <MenuItem value="service2">Usługa 2</MenuItem>
            <MenuItem value="service3">Usługa 3</MenuItem>
            <MenuItem value="service4">Usługa 4</MenuItem>
          </Select>
          <InputLabel htmlFor="firstName">Imię</InputLabel>
          <TextField
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          <InputLabel htmlFor="lastName">Nazwisko</InputLabel>
          <TextField
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && errors.lastName}
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <InputLabel htmlFor="phone">Telefon</InputLabel>
          <TextField
            type="tel"
            name="phone"
            id="phone"
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
