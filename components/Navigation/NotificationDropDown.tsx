import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const NotificationDropDown = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "fixed",
        right: 5,
        top: 60,
        border: "1px solid #fff",
        borderRadius: 2,
      }}
    >
      <Alert
        sx={{ minWidth: "250px", borderRadius: 1, m: 1 }}
        variant="filled"
        severity="error"
        color="error"
      >
        Price Change
      </Alert>
      <Alert
        sx={{ minWidth: "250px", borderRadius: 1, m: 1 }}
        variant="filled"
        severity="error"
        color="error"
      >
        Price Change
      </Alert>
    </Box>
  );
};

export default NotificationDropDown;
