import React from "react";
import { Box } from "@mui/system";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl } from "@mui/material";

const TradingParamsBottomBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "fixed",
        bottom: 20,
        right: 20,
        width: `calc(100% - 300px)`,
        borderRadius: 2,
        px: 3,
        "&:hover": { height: "45%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ my: "auto" }}>
          <div style={{ display: "flex" }}>
            <AccountBalanceWalletIcon />
            <Typography sx={{ ml: 2 }} variant="subtitle2">
              FILTER BY
            </Typography>
          </div>
        </Box>
        <Box>
          <FormGroup sx={{ m: 2 }} row>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="THROUGHBRED"
            />
            <FormControlLabel control={<Checkbox />} label="GREYHOUNDS" />
            <FormControlLabel control={<Checkbox />} label="HARNESS" />
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default TradingParamsBottomBar;
