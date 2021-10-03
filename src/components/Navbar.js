import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../routing/routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "./Logo";

import header from "../styles/header";
import common from "../styles/common";

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
  const headerStyles = header();
  const commonStyles = common();

  return (
    <AppBar position="static">
      <Toolbar className={`${commonStyles.gray} ${headerStyles.navbar}`}>
        <Logo className={headerStyles.logo} />
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
        <Button variant="contained" color="primary">
          Zaloguj
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
