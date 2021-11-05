import { makeStyles } from "@material-ui/core/styles";
const about = makeStyles((theme) => ({
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
  },
  socialIcon: {
    fontSize: "2.5rem",
    marginLeft: "1rem",
  },
  addressAndSocialCard: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

export default about;
