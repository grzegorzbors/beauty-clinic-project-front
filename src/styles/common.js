import { makeStyles } from "@material-ui/core/styles";

const common = makeStyles((theme) => ({
  lightGray: {
    backgroundColor: "#D8DDE1",
  },
  grayColor: {
    backgroundColor: theme.palette.grey["A400"],
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
    padding: "0 5rem",
    textAlign: "justify",
  },
}));

export default common;
