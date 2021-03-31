import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    minHeight: "5vh",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    "&:hover *": {
      textDecoration: "none",
    },
  },
}));

const links = [
  {
    text: "Ochrona danych osobowych",
    url: "/personal_data_protection",
  },
  {
    text: "Polityka prywatności",
    url: "/privacy_policy",
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer}>
      Copyright {moment().format("YYYY")} &copy; 
      {links.map((link) => {
        return (
          <Link
            component={RouterLink}
            to={link.url}
            key={link.text}
            color="inherit"
          >
            {link.text}
          </Link>
        );
      })}
    </Grid>
  );
};

export default Footer;