import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    minHeight: "60%",
    "&:hover *": {
      textDecoration: "none",
    },
  },
}));

const Logo = () => {
  const classes = useStyles();

  return <div className={classes.logo}>Logo</div>;
}

export default Logo;