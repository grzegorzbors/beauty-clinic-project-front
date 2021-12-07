import { makeStyles } from "@material-ui/core/styles";

const common = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  activeLink: {
    color: "#D8DDE1",
    textDecoration: "underline",
  },
  lightGray: {
    backgroundColor: "#D8DDE1",
  },
  grayColor: {
    backgroundColor: theme.palette.grey["A400"] + "!important",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
  evenlySpaced: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pageFlexColumnLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: 0,
    textAlign: "justify",
  },
}));

export default common;
