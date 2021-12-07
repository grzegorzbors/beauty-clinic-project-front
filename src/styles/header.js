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
