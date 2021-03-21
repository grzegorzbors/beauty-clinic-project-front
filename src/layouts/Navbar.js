import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  navbar: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    height: "40%",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
    },
  },
  navlink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const links = [
    "O Nas",
    "Usługi",
    "Nasz Zespół",
    "Umów wizytę",
    "FAQ",
    "Kontakt",
  ];

  return (
    <Grid container className={classes.navbar}>
      {links.map((linkText, index) => {
        return (
          <Link href="#" className={classes.navlink} onClick={preventDefault} color="inherit" key={index}>
            {linkText}
          </Link>
        );
      })}
    </Grid>
  );
}

export default Navbar;
