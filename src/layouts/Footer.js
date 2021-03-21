import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  footerlink: {
    "&:hover": {
      textDecoration: "none",
    }
  }
}));

function Footer() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const links = ["Copyright", "Ochrona danych osobowych", "Polityka prywatności"]

  return (
    <Grid container className={classes.footer}>
      {links.map((linkText, index) => {
        if (linkText === "Copyright") {
          return <Link href="#" className={classes.footerlink} onClick={preventDefault} color="inherit" key={index}>{`${linkText} ${new Date().getFullYear().toString()}`}</Link>
        }
        return <Link href="#" className={classes.footerlink} onClick={preventDefault} color="inherit" key={index}>{linkText}</Link>
        })}
    </Grid>
  );
}

export default Footer;