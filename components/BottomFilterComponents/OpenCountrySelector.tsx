import React from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CalPlaceHolder from "../../assets/calplaceholder.png";
import Image from "next/image";
const OpenCountrySelector = () => {
  return (
    <Grid item xs={6}>
      <Grid container>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AUSTRALIA"
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="UNITED KINGDOM" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="SOUTH AFRICA" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="NEW ZEALAND" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="IRELAND" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="HONG KONG" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="USA / CA" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="FRANCE" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="SINGAPORE" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel control={<Checkbox />} label="JAPAN" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="OTHER (I.E SWEDEN, MEXICO"
          />
        </Grid>
      </Grid>
      <Image src={CalPlaceHolder} layout="responsive" />
    </Grid>
  );
};

export default OpenCountrySelector;
