import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select/";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const OpenFilterSelectors = () => {
  return (
    <React.Fragment>
      <Typography sx={{ mb: 2 }} variant="h6">
        OTHER FILTERS
      </Typography>
      <Grid container spacing={1}>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>VENUE</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"Flemmington"}>Flemmington</MenuItem>
              <MenuItem value={"Rosehill"}>Rosehill</MenuItem>
              <MenuItem value={"Centerury Gardens"}>Centerury Gardens</MenuItem>
              <MenuItem value={"Doomben"}>Doomben</MenuItem>
              <MenuItem value={"Eagle Farm"}>Eagle Farm</MenuItem>
              <MenuItem value={"Emerald Downs"}>Emerald Downs</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>LEVEL</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"C"}>C</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"P"}>P</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>PRODUCT</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"Best of the Best"}>Best of the Best</MenuItem>
              <MenuItem value={"Best Tote or SP"}>Best Tote or SP</MenuItem>
              <MenuItem value={"Best Tote Place"}>Best Tote Place</MenuItem>
              <MenuItem value={"Fixed Place"}>Fixed Place</MenuItem>
              <MenuItem value={"Fixed Win"}>Fixed Win</MenuItem>
              <MenuItem value={"Mid Tote or SP"}>Mid Tote or SP</MenuItem>
              <MenuItem value={"Mid Tote Place"}>Mid Tote Place</MenuItem>
              <MenuItem value={"Mid Tote Win"}>Mid Tote Win</MenuItem>
              <MenuItem value={"Promo Win"}>Promo Win</MenuItem>
              <MenuItem value={"Starting Price"}>Starting Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>WIN / PLACE</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"Win/Place"}>Win/Place</MenuItem>
              <MenuItem value={"Quinella"}>Quinella</MenuItem>
              <MenuItem value={"Exacta"}>Exacta</MenuItem>
              <MenuItem value={"Trifecta"}>Trifecta</MenuItem>
              <MenuItem value={"First Four"}>First Four</MenuItem>
              <MenuItem value={"Superfecta"}>Superfecta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>FIELD SIZE</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"1-5"}>1-5</MenuItem>
              <MenuItem value={"6-10"}>6-10</MenuItem>
              <MenuItem value={"11-15"}>11-15</MenuItem>
              <MenuItem value={"16+"}>16+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>GOING</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"Fast"}>Fast</MenuItem>
              <MenuItem value={"Good"}>Good</MenuItem>
              <MenuItem value={"Heavy"}>Heavy</MenuItem>
              <MenuItem value={"Slow"}>Slow</MenuItem>
              <MenuItem value={"Soft"}>Soft</MenuItem>
              <MenuItem value={"Unknown"}>Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControl sx={{ mb: 1 }} fullWidth>
            <InputLabel sx={{ color: "white" }}>DAY OF WEEK</InputLabel>
            <Select
              sx={{
                backgroundColor: "primary.main",
                fontColor: "#ffffff",
                borderRadius: 2,
              }}
              variant="filled"
              label="Venue"
            >
              <MenuItem value={"Monday"}>Monday</MenuItem>
              <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
              <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
              <MenuItem value={"Thursday"}>Thursday</MenuItem>
              <MenuItem value={"Friday"}>Friday</MenuItem>
              <MenuItem value={"Saturday"}>Saturday</MenuItem>
              <MenuItem value={"Sunday"}>Sunday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OpenFilterSelectors;
