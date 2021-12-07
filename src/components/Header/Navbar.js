import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Logo from "../Logo";
import DrawerComponent from "./DrawerComponent";
import links from "./links";

import { useSelector, useDispatch } from "react-redux";

import header from "../../styles/header";
import common from "../../styles/common";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const headerStyles = header();
  const commonStyles = common();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogIn = () => {
    dispatch({
      type: "LOG_IN",
    });
  };

  const handleLogOut = () => {
    dispatch({
      type: "LOG_OUT",
    });
  };

  const navItemAlignment = isMobile
    ? headerStyles.spacedBetween
    : commonStyles.evenlySpaced;

  const navLinks = links.map((link) => {
    return (
      <NavLink
        to={link.url}
        key={link.text}
        className={commonStyles.link}
        activeClassName={commonStyles.activeLink}
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
            {!isLoggedIn && (
              <Button variant="contained" color="primary" onClick={handleLogIn}>
                Zaloguj
              </Button>
            )}
            {isLoggedIn && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogOut}
              >
                Wyloguj
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
