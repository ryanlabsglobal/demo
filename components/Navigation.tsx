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
import Avatar from "@mui/material/Avatar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 240;
const Navigation: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { dashboards, setDashboards } = React.useContext(UserContext);
  const ShowDashboardHandler = () => setDashboards(!dashboards);
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
          <Typography variant="h6" noWrap component="div">
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
            <Button
              endIcon={<AddIcon />}
              onClick={handleOpen}
              sx={{ mr: 3 }}
              variant="contained"
            >
              Alerts
            </Button>
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
        <Avatar sx={{ ml: 2 }}>S</Avatar>
        <Typography variant="subtitle1" sx={{ ml: 1, mt: 2 }}>
          Shane Clarke
        </Typography>
        <Typography variant="caption" sx={{ ml: 1 }}>
          Executive Director @ RACELABS
        </Typography>
        <Divider sx={{ width: "70%", mt: 3, ml: 1, borderColor: "#ffffff" }} />
        <Typography variant="h4" sx={{ ml: 1, mt: 2 }}>
          ODDS ENGINE +
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <Divider />
          <ListItem onClick={ShowDashboardHandler} button>
            <ListItemText
              primary="Dashboards"
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>
          <Divider />
          {dashboards && (
            <React.Fragment>
              <ListItem
                button
                onClick={() => router.push("/business-intelligence")}
              >
                {router.pathname === "/business-intelligence" && (
                  <ArrowForwardIosIcon fontSize="small" />
                )}
                <ListItemText primary="Business Intelligence" />
              </ListItem>
              <Divider />
            </React.Fragment>
          )}
          {dashboards && (
            <React.Fragment>
              <ListItem button onClick={() => router.push("/player-profiles")}>
                {router.pathname === "/player-profiles" && (
                  <ArrowForwardIosIcon fontSize="small" />
                )}
                <ListItemText primary="Player Profiles" />
              </ListItem>
              <Divider />
            </React.Fragment>
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
      >
        <Toolbar />
        {props.children}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.default",
            width: 900,
            mx: "auto",
            marginTop: "30vh",
            boxShadow: 24,
            borderRadius: 1,
            p: 3,
          }}
        >
          <Typography variant="h6">Fixed Alerts</Typography>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ mr: 3 }} variant="body1">
              If Events are Canceled
            </Typography>
            <Typography sx={{ mr: 3 }} variant="body1">
              If Runners are Scratched
            </Typography>
            <Typography variant="body1">If there are Jockey Changes</Typography>
          </Box>
          <Typography variant="h6">Set Alerts</Typography>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Changes in Track Condition"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Amount of Bets on Runner within Time Span"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Events are Delayed"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Changes in Market Movement"
            />
            <FormControlLabel control={<Checkbox />} label="Race Alerts" />
            <FormControlLabel
              control={<Checkbox />}
              label="Jockeys with Select Runners"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Wagers over X Amount"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Market Coverage Falls"
            />
          </FormGroup>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleClose}
              color="error"
              sx={{ mr: 2 }}
              variant="contained"
            >
              CANCEL
            </Button>
            <Button variant="contained">CONFIRM</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Navigation;
