import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useMyStyles from "../styles/MyStyles";

import { Link as RouterLink } from "react-router-dom";

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
    url: "/new_appointment",
  },
  {
    text: "FAQ",
    url: "/faq",
  },
  {
    text: "Kontakt",
    url: "/contact",
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