import React from "react";
import { Box } from "@mui/system";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Grid, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const InitialLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ my: "auto" }}>
        <div style={{ display: "flex" }}>
          <FilterAltOutlinedIcon />
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
  );
};
export default InitialLayout;
