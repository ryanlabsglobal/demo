import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import UserContext from "../../store/UserContext";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Box from "@mui/system/Box";
import { useRouter } from "next/router";

//The main component for the navbar is Navigation.tsx

const DashboardsDropDown = () => {
  const router = useRouter();
  const { dashboards, setDashboards } = React.useContext(UserContext);
  const ShowDashboardHandler = () => setDashboards(!dashboards);
  //active adds the background color to the REPORTS drop down, latest UI doesn't include this feature but keeping in kjust in case
  let active;
  let activeDrowdown;
  if (dashboards === true) {
    active = {
      bgcolor: "rgba(0, 0, 0, 0.6)",
      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.55)" },
    };
    activeDrowdown = {
      bgcolor: "rgba(0, 0, 0, 0.4)",
      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.35)" },
    };
  }
  return (
    <React.Fragment>
      <ListItem button onClick={ShowDashboardHandler}>
        <Box sx={{ mr: "16px" }}>
          <CorporateFareOutlinedIcon sx={{ color: "#fff" }} />
        </Box>

        <ListItemText primary="REPORTS" />
      </ListItem>

      {dashboards && (
        <React.Fragment>
          <Divider />
          <ListItem
            sx={{ pr: "16px" }}
            button
            onClick={() => router.push("/business-intelligence")}
          >
            <Box sx={{ mr: "16px" }}>
              <InsertChartOutlinedIcon
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            </Box>

            {router.pathname === "/business-intelligence" && (
              <KeyboardArrowRightOutlinedIcon fontSize="small" />
            )}
            <Typography sx={{ fontSize: "12px" }}>
              BUSINESS INTELLIGENCE
            </Typography>
          </ListItem>
        </React.Fragment>
      )}
      {dashboards && (
        <React.Fragment>
          <Divider />
          <ListItem button onClick={() => router.push("/player-profiles")}>
            <Box sx={{ mr: "16px" }}>
              <PermIdentityOutlinedIcon
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            </Box>
            {router.pathname === "/player-profiles" && (
              <KeyboardArrowRightOutlinedIcon fontSize="small" />
            )}
            <Typography sx={{ fontSize: "12px" }}>PLAYER PROFILES</Typography>
          </ListItem>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DashboardsDropDown;
