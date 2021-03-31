import { makeStyles } from "@material-ui/core/styles";

const useMyStyles = makeStyles((theme) => ({
  navbar: {
    minHeight: "40%",
    textTransform: "uppercase",
  },
  footer: {
    minHeight: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  gray: {
    textDecoration: "none",
    "&:hover *": {
      textDecoration: "none",
    },
    backgroundColor: theme.palette.grey["A400"],
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: "space-evenly",
    alignItems: "center",
  }
}));

export default useMyStyles;