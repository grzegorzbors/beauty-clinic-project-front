import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flexDirection: "column",
//     backgroundColor: "#343B41",
//     color: "#F7F7F7",
//     height: "40%",
//   },
// }));

function Layout() {
  // const classes = useStyles();

  return (
    <Grid>
      <Header />
      <Content />
      <Footer />
    </Grid>
  );
}

export default Layout;
