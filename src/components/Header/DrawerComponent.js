import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import links from "./links";

import common from "../../styles/common";
import header from "../../styles/header";

const DrawerComponent = () => {
  const commonStyles = common();
  const headerStyles = header();

  const [openDrawer, setOpenDrawer] = useState(false);

  const listItems = links.map((link) => {
    return (
      <ListItem onClick={() => setOpenDrawer(false)} key={link.text}>
        <ListItemText className={headerStyles.navbar}>
          <NavLink
            to={link.url}
            className={headerStyles.link}
            activeClassName={headerStyles.activeLink}
          >
            {link.text}
          </NavLink>
        </ListItemText>
      </ListItem>
    );
  });
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: commonStyles.grayColor }}
      >
        <List className={headerStyles.drawerList}>
          {listItems}
          <Button
            variant="contained"
            color="primary"
            className={headerStyles.drawerButton}
          >
            Zaloguj
          </Button>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
};
export default DrawerComponent;
