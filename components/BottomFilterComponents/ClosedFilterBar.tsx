import React from "react";
import { Box } from "@mui/system";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ClosedFilterBar = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const smallFont = {
    fontSize: "10px",
    color: "rgba(225, 225, 225, .38)",
  };
  const smallFontTitle = {
    fontSize: "10px",
  };
  const largeFont = {
    fontSize: "12px",
    color: "rgba(225, 225, 225, .38)",
  };
  const largeFontTitle = {
    fontSize: "12px",
  };

  if (large) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "16px",
          paddingY: "8px",
        }}
      >
        <Box sx={{ flexBasis: "45%" }}>
          <Grid container>
            <Grid item xs={4}>
              <Box sx={{ display: "flex" }}>
                <FilterAltOutlinedIcon />
                <Typography sx={{ fontSize: "15px", ml: 1 }} variant="body2">
                  FILTER BY
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(225, 225, 225, .6)",
                  textDecoration: "underline",
                }}
                variant="body2"
              >
                CLICK TO EXPAND
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={largeFont} variant="body2">
                THOROUGHBREDS
              </Typography>
              <Typography sx={largeFont} variant="body2">
                AUS, QLD - NSW - TAS
              </Typography>
              <Typography sx={largeFont} variant="body2">
                24/11/21 - 27/11/21
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <div>
          <Typography sx={largeFontTitle} variant="body2">
            OTHER FILTERS
          </Typography>
          <Typography sx={largeFont} variant="body2">
            VENUE N/A - FIELD SIZE 12 - LEVEL N/A
          </Typography>
        </div>
        <div>
          <Typography sx={largeFontTitle} variant="body2">
            RANGES
          </Typography>
          <Typography sx={largeFont} variant="body2">
            VENUE N/A - FIELD SIZE 12 - LEVEL N/A
          </Typography>
        </div>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
        rowGap: "10px",
        paddingX: "16px",
        paddingY: "8px",
      }}
    >
      <Box sx={{ flexBasis: "40%" }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "15px" }} variant="subtitle2">
              FiILTER BY
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={smallFont} variant="body2">
              THOROUGHBREDS
            </Typography>
            <Typography sx={smallFont} variant="body2">
              AUS, QLD - NSW - TAS
            </Typography>
            <Typography sx={smallFont} variant="body2">
              24/11/21 - 27/11/21
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div>
        <Typography sx={smallFontTitle} variant="body2">
          OTHER FILTERS
        </Typography>
        <Typography sx={smallFont} variant="body2">
          VENUE N/A - FIELD SIZE 12 - LEVEL N/A
        </Typography>
        <Typography sx={smallFont} variant="body2">
          PRODUCT N/A - DAY OF WEEK N/A - MARKET WIN/PLACE
        </Typography>
      </div>
      <div>
        <Typography sx={smallFontTitle} variant="body2">
          RANGES
        </Typography>
        <Typography sx={smallFont} variant="body2">
          DISTANCE N/A BENCHMARK 0/20
        </Typography>
        <Typography sx={smallFont} variant="body2">
          ODDS 1.00/10.50 - TIME SERIES N/A
        </Typography>
      </div>
    </Box>
  );
};

export default ClosedFilterBar;
