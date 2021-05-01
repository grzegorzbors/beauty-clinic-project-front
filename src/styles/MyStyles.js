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
  grid__Page: {
    minHeight: "75vh",
    width: "80%",
  },
  box__Page: {
    backgroundColor: "#D8DDE1",
    padding: "0 1rem 1rem 1rem",
    width: "90%",
    border: "1px solid black",
  },
  card__TeamMember: {
    display: "flex",
    marginBottom: ".1rem",
  },
  cardContent__TeamMember: {
    display: "flex",
    flexDirection: "row",
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