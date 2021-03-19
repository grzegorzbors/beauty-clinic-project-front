import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    // padding: theme.spacing(2),
  },
}));


function Layout() {
  const classes = useStyles();
  return (
    <Grid>
      <Header />
      <Content />
      <Footer />
    </Grid>
  );
}

export default Layout;
