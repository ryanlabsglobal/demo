import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import TopBarNav from "./TopBarNav";
import ProfileAndTitle from "./ProfileAndTitle";
import DashboardsDropDown from "./DashboardsDropDown";

const drawerWidth = 260;
const Navigation: React.FC = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBarNav />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: "0px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ProfileAndTitle />
          <ListItem button>
            <ListItemText primary="SETTINGS" />
          </ListItem>
          <Divider />
          <DashboardsDropDown />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

export default Navigation;
