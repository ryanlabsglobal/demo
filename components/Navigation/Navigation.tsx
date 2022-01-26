import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

//This is the main component that wraps the pages to provide the navbar around the content
//Currently this is provided by AuthComppmemt.tsx in the lib folder and will wrap any page that is loged in and wrapped in the higher order component
//Below are the components that make up the Nav Bar

//The TopBarNav runs accross the
import TopBarNav from "./TopBarNav";
//ProfileAndTitle adds the Names to the left hand side
import ProfileAndTitle from "./ProfileAndTitle";
//This is specifically the Dashboard drop down menu item
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
