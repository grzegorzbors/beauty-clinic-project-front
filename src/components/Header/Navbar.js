import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Logo from "../Logo";
import DrawerComponent from "./DrawerComponent";
import links from "./links";

import header from "../../styles/header";
import common from "../../styles/common";

const Navbar = () => {
  const headerStyles = header();
  const commonStyles = common();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navItemAlignment = isMobile
    ? headerStyles.spacedBetween
    : commonStyles.evenlySpaced;

  const navLinks = links.map((link) => {
    return (
      <NavLink
        to={link.url}
        key={link.text}
        className={headerStyles.link}
        activeClassName={headerStyles.activeLink}
      >
        {link.text}
      </NavLink>
    );
  });

  return (
    <AppBar position="static">
      <Toolbar
        className={`${commonStyles.grayColor} ${navItemAlignment} ${headerStyles.navbar}`}
      >
        <Logo className={headerStyles.logo} />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            {navLinks}
            <Button variant="contained" color="primary">
              Zaloguj
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
