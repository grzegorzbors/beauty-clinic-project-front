import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import useMyStyles from "../styles/MyStyles";
import { routes } from "../routing/routes";

const links = [
  {
    text: "O nas",
    url: routes.ABOUT,
  },
  {
    text: "Usługi",
    url: routes.SERVICES,
  },
  {
    text: "Nasz zespół",
    url: routes.TEAM,
  },
  {
    text: "Umów wizytę",
    url: routes.APPOINTMENT,
  },
  {
    text: "FAQ",
    url: routes.FAQ,
  },
  {
    text: "Kontakt",
    url: routes.CONTACT,
  },
];

const Navbar = () => {
  const classes = useMyStyles();

  return (
    <Grid container className={`${classes.gray} ${classes.navbar}`}>
      {links.map((link) => {
        return (
          <Link
            component={RouterLink}
            to={link.url}
            color="inherit"
            underline="none"
            key={link.text}
          >
            {link.text}
          </Link>
        );
      })}
    </Grid>
  );
};

export default Navbar;