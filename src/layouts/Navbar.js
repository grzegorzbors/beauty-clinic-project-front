import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    height: "40%",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>O Nas</p>
      <p>Usługi</p>
      <p>Nasz zespół</p>
      <p>Umów wizytę</p>
      <p>FAQ</p>
      <p>Kontakt</p>
    </div>
    );
}

export default Navbar;
