import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

//The main component for the navbar is Navigation.tsx

const ProfileAndTitle = () => {
  return (
    <React.Fragment>
      <Box sx={{ ml: 2, mb: 3 }}>
        <Avatar>S</Avatar>
        <Typography sx={{ mt: 1 }} variant="body1">
          SHANE CLARKE
        </Typography>
        <Typography variant="caption">Executive Director @ RACELABS</Typography>
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
    </React.Fragment>
  );
};

export default ProfileAndTitle;
