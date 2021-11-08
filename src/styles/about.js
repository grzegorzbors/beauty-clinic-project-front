import { makeStyles } from "@material-ui/core/styles";
const about = makeStyles((theme) => ({
  socialItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
  },
  socialIcon: {
    fontSize: "2.5rem",
    marginLeft: "1rem",
  },
  addressAndSocialArea: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "15px",
  },
  address: {
    "&::after": {
      content: '""',
      display: "block",
      borderBottom: "1px solid lightgray",
    },
  },
}));

export default about;
