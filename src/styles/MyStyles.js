import { makeStyles } from "@material-ui/core/styles";

const useMyStyles = makeStyles((theme) => ({
  // header
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
  // team page
  TeamMember__mainWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TeamMember__contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 30%",
    paddingRight: "1em",
    alignItems: "center",
    fontWeight: "700",
  },
  TeamMember__name: {
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
    margin: "0",
  },
  TeamMember__img: {
    maxWidth: "50%",
    height: "auto",
  },
  // footer
  footer: {
    minHeight: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  // general styling
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