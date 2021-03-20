import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "60%",
  },
}));

function Logo() {
  const classes = useStyles();

  return <div className={classes.logo}>Logo</div>;
}

export default Logo;
