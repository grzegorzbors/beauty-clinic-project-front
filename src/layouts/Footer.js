import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

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

const preventDefault = (event) => event.preventDefault();
const links = [
  {
    text: "Copyright",
    url: "#",
  },
  {
    text: "Ochrona danych osobowych",
    url: "#",
  },
  {
    text: "Polityka prywatności",
    url: "#",
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.url}
            onClick={preventDefault}
            key={index}
            color="inherit"
          >
            {link.text === "Copyright"
              ? `${link.text} ${moment().format("YYYY")} \xA9`
              : link.text}
          </Link>
        );
      })}
    </Grid>
  );
};

export default Footer;