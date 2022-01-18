import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select/";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Grid } from "@mui/material";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const TradingParameters = () => {
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
    <Paper sx={{ pt: 1, borderRadius: 2 }}>
      <div style={{ display: "flex" }}>
        <AccountBalanceWalletIcon sx={{ mx: 2, marginTop: "5px" }} />
        <Typography variant="subtitle1">TRADING PARAMETERS</Typography>
      </div>
      <FormGroup sx={{ m: 2 }} row>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="THROUGHBRED"
        />
        <FormControlLabel control={<Checkbox />} label="GREYHOUNDS" />
        <FormControlLabel control={<Checkbox />} label="HARNESS" />
      </FormGroup>
      <Grid sx={{ p: 2 }} spacing={3} container>
        <Grid xs={6} item>
          <FormControl sx={{ mb: 2 }} fullWidth>
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
          <FormControl sx={{ mb: 2 }} fullWidth>
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
          <FormControl sx={{ mb: 2 }} fullWidth>
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
          <FormControl sx={{ mb: 2 }} fullWidth>
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
        <Grid item xs={6}>
          <FormControl sx={{ mb: 2 }} fullWidth>
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
          <FormControl sx={{ mb: 2 }} fullWidth>
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
          <FormControl sx={{ mb: 2 }} fullWidth>
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
      <FormGroup sx={{ m: 2 }} row>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="AUSTRALIA"
        />
        <FormControlLabel control={<Checkbox />} label="UNITED KINGDOM" />
        <FormControlLabel control={<Checkbox />} label="SOUTH AFRICA" />
        <FormControlLabel control={<Checkbox />} label="NEW ZEALAND" />
        <FormControlLabel control={<Checkbox />} label="IRELAND" />
        <FormControlLabel control={<Checkbox />} label="HONG KONG" />
        <FormControlLabel control={<Checkbox />} label="USA / CA" />
        <FormControlLabel control={<Checkbox />} label="FRANCE" />
        <FormControlLabel control={<Checkbox />} label="SINGAPORE" />
        <FormControlLabel control={<Checkbox />} label="JAPAN" />
        <FormControlLabel
          control={<Checkbox />}
          label="OTHER (I.E SWEDEN, MEXICO"
        />
      </FormGroup>
      <FormControl sx={{ mb: 2, width: 150, ml: 2 }}>
        <InputLabel sx={{ color: "white" }}>STATES</InputLabel>
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
      <br />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2, pb: 1 }}>
        <Button color="error" sx={{ mr: 2 }} variant="contained">
          Cancel
        </Button>
        <Button variant="contained">Confirm</Button>
      </Box>
    </Paper>
  );
};
export default TradingParameters;
