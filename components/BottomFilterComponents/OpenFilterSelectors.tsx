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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OpenFilterSelectors;
