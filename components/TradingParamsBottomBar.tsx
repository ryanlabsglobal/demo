import React from "react";
import { Box } from "@mui/system";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Grid, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Modal } from "@mui/material";
import Select from "@mui/material/Select/";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import CalPlaceHolder from "../assets/calplaceholder.png";
import Image from "next/image";
import ClosedFilterBar from "./BottomFilterComponents/ClosedFilterBar";

const TradingParamsBottomBar = () => {
  const [open, setOpen] = React.useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
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
    <React.Fragment>
      {!open && (
        <Box
          onClick={openHandler}
          sx={{
            bgcolor: "background.paper",
            position: "fixed",
            bottom: 5,
            right: 20,
            width: `calc(100% - 300px)`,
            borderRadius: 2,
            cursor: "pointer",
            border: "1px solid #fff",
            minWidth: "600px",
          }}
        >
          <ClosedFilterBar />
        </Box>
      )}
      <Modal open={open} onClose={closeHandler}>
        <Box
          sx={{
            bgcolor: "background.paper",
            position: "fixed",
            bottom: 5,
            right: 20,
            width: `calc(100% - 300px)`,
            borderRadius: 2,
            px: 3,
            minHeight: "570px",
            height: "50vh",
            overflowY: "scroll",
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
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item lg={4} md={6} sm={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="AUSTRALIA"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="UNITED KINGDOM"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="SOUTH AFRICA"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="NEW ZEALAND"
                  />
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
            <Grid xs={6} item>
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
              <Typography variant="h6">Ranges</Typography>
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
                          onChange={(e) =>
                            setBenchmarkRangeToggle(e.target.checked)
                          }
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
                          onChange={(e) =>
                            setTimeSeriesRangeToggle(e.target.checked)
                          }
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
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button onClick={closeHandler} color="error" variant="contained">
              CLEAR
            </Button>
            <Button sx={{ ml: 2 }} variant="contained">
              GENERATE
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default TradingParamsBottomBar;
