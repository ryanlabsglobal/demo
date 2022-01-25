import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AlertsModal from "../AlertModalSelection/AlertModal";
import logo from "../../assets/logo.png";
import Image from "next/image";

const drawerWidth = 260;

const TopBarNav = () => {
  const router = useRouter();
  return (
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
        {router.pathname === "/business-intelligence" && (
          <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
            Business Intelligence
          </Typography>
        )}
        {router.pathname === "/player-profiles" && (
          <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
            Player Profiles
          </Typography>
        )}
        {router.pathname === "/player-profiles/[id]" && (
          <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
            Player Profiles
          </Typography>
        )}
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
        {router.pathname === "/player-profiles/[id]" && (
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
  );
};

export default TopBarNav;
