import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

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
  const preventDefault = (event) => event.preventDefault();
  const links = [
    {
      text: "O nas",
      url: "#",
    },
    {
      text: "Usługi",
      url: "#",
    },
    {
      text: "Nasz zespół",
      url: "#",
    },
    {
      text: "Umów wizytę",
      url: "#"
    },
    {
      text: "FAQ",
      url: "#"
    },
    {
      text: "Kontakt",
      url: "#"
    },
  ];

  return (
    <Grid container className={classes.navbar}>
      {links.map((link, index) => {
        return (
          <Link href="#" onClick={preventDefault} color="inherit" key={index}>
            {link.text}
          </Link>
        );
      })}
    </Grid>
  );
}

export default Navbar;