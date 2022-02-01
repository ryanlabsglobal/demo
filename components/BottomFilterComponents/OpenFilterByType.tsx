import React from "react";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/system/Box";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Checkbox from "@mui/material/Checkbox";
const OpenFilterByType = () => {
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

export default OpenFilterByType;
