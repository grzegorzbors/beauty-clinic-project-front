import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    textAlign: "center",
    width: "100%",
    "& p": {
      display: "inline-block",
      padding: "0 5%"
    }
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>Copyright 2021</p>
      <p>Ochrona danych osobowych</p>
      <p>Polityka prywatności</p>
    </div>);
}

export default Footer;