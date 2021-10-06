import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Logo from "../Logo";
import DrawerComponent from "./DrawerComponent";
import NavLinks from "./NavLinks";

import header from "../../styles/header";
import common from "../../styles/common";

const Navbar = () => {
  const headerStyles = header();
  const commonStyles = common();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <Toolbar className={`${commonStyles.gray} ${headerStyles.navbar}`}>
        <Logo className={headerStyles.logo} />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            <NavLinks />
            <Button variant="contained" color="primary">
              Zaloguj
            </Button>
          </>
        )}
        {}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
