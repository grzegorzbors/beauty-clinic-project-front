import { makeStyles } from "@material-ui/core/styles";

const common = makeStyles((theme) => ({
  lightGray: {
    backgroundColor: "#D8DDE1",
  },
  gray: {
    backgroundColor: theme.palette.grey["A400"],
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default common;
