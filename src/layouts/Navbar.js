import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    minHeight: "40%",
    textDecoration: "none",
    "&:hover *": {
      textDecoration: "none",
    },
    backgroundColor: "#343B41",
    color: "#F7F7F7",
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const links = [
    {
      text: "O nas",
      url: "/about",
    },
    {
      text: "Usługi",
      url: "/services",
    },
    {
      text: "Nasz zespół",
      url: "/our_team",
    },
    {
      text: "Umów wizytę",
      url: "/new_appointment"
    },
    {
      text: "FAQ",
      url: "/faq"
    },
    {
      text: "Kontakt",
      url: "/contact"
    },
  ];

  return (
    <Grid container className={classes.navbar}>
      {links.map((link, index) => {
        return (
          <Link
            component={RouterLink} 
            to={link.url} 
            color="inherit"
            key={index}>
            {link.text}
          </Link>
        );
      })}
    </Grid>
  );
}

export default Navbar;