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
  card__TeamMember: {
    marginBottom: ".1rem",
  },
  cardContent__TeamMember: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardBox__TeamMember: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 30%",
    paddingRight: "1em",
    alignItems: "center"
  },
  teamMemberImage: {
    width: "50%",
    height: "50%"
  },
  footer: {
    minHeight: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
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

export default useMyStyles;