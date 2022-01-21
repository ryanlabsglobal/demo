import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import UserContext from "../store/UserContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AlertsModal from "./AlertModalSelection/AlertModal";
import logo from "../assets/logo.png";
import Image from "next/image";

const drawerWidth = 260;
const Navigation: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (data: boolean) => setOpen(data);
  const { dashboards, setDashboards } = React.useContext(UserContext);
  const ShowDashboardHandler = () => setDashboards(!dashboards);
  let active;
  if (dashboards === true) {
    active = {
      bgcolor: "rgba(0, 0, 0, 0.6)",
      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.55)" },
    };
  }
  const router = useRouter();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          borderRadius: "0px",
          bgcolor: "background.paper",
        }}
      >
        <Toolbar>
          <Image width={60} height={40} src={logo} />
          <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
            Business Intelligence
          </Typography>
          {router.pathname === "/player-profiles" && (
            <TextField
              sx={{ mx: 2 }}
              placeholder="Search"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <Box sx={{ ml: "auto", mr: 3 }}>
            <AlertsModal />
            <NotificationsIcon />
          </Box>
        </Toolbar>
      </AppBar>
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
          <Box sx={{ ml: 2, mb: 3 }}>
            <Avatar>S</Avatar>
            <Typography sx={{ mt: 1 }} variant="body1">
              SHANE CLARKE
            </Typography>
            <Typography variant="caption">
              Executive Director @ RACELABS
            </Typography>
          </Box>
          <Divider
            sx={{
              borderColor: "rgba(255, 255, 255, 0.3)",
              width: "65%",
              ml: 2,
            }}
          />
          <Typography sx={{ mt: 2, ml: 2, mb: 1 }} variant="h6">
            ODDS ENGINE +
          </Typography>

          <ListItem button>
            <ListItemText primary="SETTINGS" />
          </ListItem>
          <Divider />
          <ListItem button sx={active} onClick={ShowDashboardHandler}>
            <ListItemText primary="DASHBOARDS" />
          </ListItem>

          {dashboards && (
            <React.Fragment>
              <ListItem
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.4)",
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.35)" },
                }}
                button
                onClick={() => router.push("/business-intelligence")}
              >
                {router.pathname === "/business-intelligence" && (
                  <ArrowForwardIosIcon fontSize="small" />
                )}
                <ListItemText primary="BUSINESS INTELLIGENCE" />
              </ListItem>
            </React.Fragment>
          )}
          {dashboards && (
            <React.Fragment>
              <ListItem
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.4)",
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.35)" },
                }}
                button
                onClick={() => router.push("/player-profiles")}
              >
                {router.pathname === "/player-profiles" && (
                  <ArrowForwardIosIcon fontSize="small" />
                )}
                <ListItemText primary="PLAYER PROFILES" />
              </ListItem>
            </React.Fragment>
          )}
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
