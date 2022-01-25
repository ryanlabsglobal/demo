import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import UserContext from "../../store/UserContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

const DashboardsDropDown = () => {
  const router = useRouter();
  const { dashboards, setDashboards } = React.useContext(UserContext);
  const ShowDashboardHandler = () => setDashboards(!dashboards);
  let active;
  if (dashboards === true) {
    active = {
      bgcolor: "rgba(0, 0, 0, 0.6)",
      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.55)" },
    };
  }
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default DashboardsDropDown;
