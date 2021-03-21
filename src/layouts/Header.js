import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  header: {
    height: "20vh",
    // position: "fixed",
    top: 0,
    left: 0,
    // color: "#F7F7F7",
    // textAlign: "center",
    width: "100%",
    // "& p": {
    //   display: "inline-block",
    //   padding: "0 5%"
    // }
  },
}));


function Header() {
 const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
