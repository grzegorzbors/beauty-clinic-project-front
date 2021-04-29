import { makeStyles } from "@material-ui/core/styles";

const useMyStyles = makeStyles((theme) => ({
  header: {
    height: "20vh",
    width: "100%",
  },
  logo: {
    minHeight: "60%",
  },
  navbar: {
    minHeight: "40%",
    textTransform: "uppercase",
  },
  container: {
    backgroundColor: "#D8DDE1"
  },
  footer: {
    minHeight: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  gray: {
    backgroundColor: theme.palette.grey["A400"],
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default useMyStyles;
