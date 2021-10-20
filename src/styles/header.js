import { makeStyles } from "@material-ui/core/styles";

const header = makeStyles((theme) => ({
  logoContainer: {
    backgroundColor: "white",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    maxHeight: "4.5rem",
  },
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
  navbar: {
    textTransform: "uppercase",
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  drawerButton: {
    width: "80%",
  },
  spacedBetween: {
    justifyContent: "space-between",
  },
}));

export default header;
