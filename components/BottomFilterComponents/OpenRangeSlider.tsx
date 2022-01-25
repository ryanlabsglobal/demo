import React from "react";

import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

const OpenRangeSlider = () => {
  const [distanceValue, setDistanceValue] = React.useState<number[]>([20, 37]);
  const [distanceToggle, setDistanceToggle] = React.useState(true);
  const [benchmarkRange, setBenchmarkRange] = React.useState<number[]>([
    20, 37,
  ]);
  const [benchmarkRangeToggle, setBenchmarkRangeToggle] = React.useState(true);

  const [oddsRange, setOddsRange] = React.useState<number[]>([20, 37]);
  const [oddsRangeToggle, setOddsRangeToggle] = React.useState(true);
  const [timeSeriesRange, setTimeSeriesRange] = React.useState<number[]>([
    20, 37,
  ]);

  const [timeSeriesRangeToggle, setTimeSeriesRangeToggle] =
    React.useState(true);
  return (
    <Grid container>
      <Grid item xs={6}>
        <FormGroup sx={{ ml: 2 }} row>
          <FormControlLabel
            control={
              <Checkbox
                checked={distanceToggle}
                onChange={(e) => setDistanceToggle(e.target.checked)}
              />
            }
            label="DISTANCE RANGE"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Slider
          disabled={!distanceToggle}
          sx={{ width: "80%" }}
          value={distanceValue}
          onChange={(
            event: Event,
            value: number | number[],
            activeThumb: number
          ) => setDistanceValue(value as number[])}
        />
      </Grid>
      <Grid item xs={6}>
        <FormGroup sx={{ ml: 2 }} row>
          <FormControlLabel
            control={
              <Checkbox
                checked={benchmarkRangeToggle}
                onChange={(e) => setBenchmarkRangeToggle(e.target.checked)}
              />
            }
            label="BENCHMARK RANGE"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Slider
          disabled={!benchmarkRangeToggle}
          sx={{ width: "80%" }}
          value={benchmarkRange}
          onChange={(
            event: Event,
            newValue: number | number[],
            activeThumb: number
          ) => setBenchmarkRange(newValue as number[])}
        />
      </Grid>
      <Grid item xs={6}>
        <FormGroup sx={{ ml: 2 }} row>
          <FormControlLabel
            control={
              <Checkbox
                checked={oddsRangeToggle}
                onChange={(e) => setOddsRangeToggle(e.target.checked)}
              />
            }
            label="ODDS RANGE"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Slider
          disabled={!oddsRangeToggle}
          sx={{ width: "80%" }}
          value={oddsRange}
          onChange={(
            event: Event,
            newValue: number | number[],
            activeThumb: number
          ) => setOddsRange(newValue as number[])}
        />
      </Grid>
      <Grid item xs={6}>
        <FormGroup sx={{ ml: 2 }} row>
          <FormControlLabel
            control={
              <Checkbox
                checked={timeSeriesRangeToggle}
                onChange={(e) => setTimeSeriesRangeToggle(e.target.checked)}
              />
            }
            label="TIME SERIES RANGE"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Slider
          disabled={!timeSeriesRangeToggle}
          sx={{ width: "80%" }}
          value={timeSeriesRange}
          onChange={(
            event: Event,
            newValue: number | number[],
            activeThumb: number
          ) => setTimeSeriesRange(newValue as number[])}
        />
      </Grid>
    </Grid>
  );
};

export default OpenRangeSlider;
