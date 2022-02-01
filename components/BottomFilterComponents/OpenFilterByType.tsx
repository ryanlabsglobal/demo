import React from "react";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/system/Box";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Checkbox from "@mui/material/Checkbox";
import Thoroughbred from "../../assets/thoroughbredIcon.svg";
import Greyhound from "../../assets/greyhoundIcon.svg";
import Harness from "../../assets/harnessIcon.svg";
import Image from "next/image";
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
          <Checkbox defaultChecked />
          <Typography sx={{ my: "auto", ml: 1 }} variant="body1">
            ALL
          </Typography>
          <Checkbox />
          <Image src={Thoroughbred} />
          <Typography sx={{ my: "auto", ml: 1 }} variant="body1">
            THOROUGHBRED
          </Typography>
          <Checkbox />
          <Image src={Greyhound} />
          <Typography sx={{ my: "auto", ml: 1 }} variant="body1">
            GREYHOUNDS
          </Typography>
          <Checkbox />
          <Image src={Harness} />
          <Typography sx={{ my: "auto", ml: 1 }} variant="body1">
            HARNESS
          </Typography>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default OpenFilterByType;
