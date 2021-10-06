import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";

import common from "../../styles/common";

const DrawerComponent = () => {
  const commonStyles = common();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={commonStyles.gray}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link color="white" underline="none" to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link color="white" underline="none" to="/about">
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link color="white" underline="none" to="/contact">
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link color="white" underline="none" to="/about">
                Faq
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
};
export default DrawerComponent;
