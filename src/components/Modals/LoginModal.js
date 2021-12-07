import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Dialog, Input } from "@material-ui/core";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginModal = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <h2>Dane Logowania</h2>
      <Formik>
        <Form>
          <input type="text" placeholder="Adres email"></input>
          <input type="text" placeholder="Hasło"></input>
          <p>
            Zapomniałeś hasła? <Link>Resetuj</Link>
          </p>
          <Button
            // type="submit"
            variant="contained"
            color="primary"
            // disabled={isSubmitting}
            // className={appointmentFormStyles.submitButton}
          >
            Zaloguj
          </Button>
          <p>Nowy użytkownik?</p>
          <Button
            // type="submit"
            variant="contained"
            color="primary"
            // disabled={isSubmitting}
            // className={appointmentFormStyles.submitButton}
          >
            Załóż profil
          </Button>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default LoginModal;
