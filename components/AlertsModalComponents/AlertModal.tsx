import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { Divider } from "@mui/material";
import Image from "next/image";
import RaceAlerts from "./RaceAlerts";
import DelayedEvents from "./DelayedEvents";
import AddIcon from "@mui/icons-material/Add";
import UserContext from "../../store/UserContext";

//SVG place holders
import runner from "../../assets/runnerBets_tabContent.svg";
import trackConditions from "../../assets/trackConditions_tabContent.svg";
import eventdelay from "../../assets/eventsDelayed_tabContent.svg";
import marketmover from "../../assets/marketMovement_tabContent.svg";
import jockeyRunners from "../../assets/jockeysRunners_tabContent.svg";
import wager from "../../assets/wagerAmount_tabContent.svg";
import marketcoverage from "../../assets/marketCoverage_tabContent.svg";

import ButtonComponent from "./ButtonComponent";

const enabled = {
  bgcolor: "rgba(21, 181, 15, .38)",
};

const disabled = {
  bgcolor: "rgba(255, 255, 255, .16)",
};

const active = {
  bacolor: "rgba(26, 134, 172, 1)",
};

const AlertModal = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("RACE ALERTS");
  const [tempAlert, setTempAlerts] = React.useState<any>({
    raceAlerts: false,
    changesInTrackConditions: false,
    runnerBetsWithinTimeSpan: false,
    eventsAreDelayed: false,
    changesInMarketMovement: false,
    jockeysWithSelectRunners: false,
    wagesOverXAmount: false,
    marketCoverageFalls: false,
  });
  const { alerts, setAlerts } = React.useContext(UserContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setTempAlerts(alerts);
    setOpen(false);
  };
  const apply = () => {
    setAlerts(tempAlert);
    setOpen(false);
  };
  const setNewPage = (data: string) => setPage(data);
  React.useEffect(() => {
    setTempAlerts(alerts);
  }, []);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ mr: 3 }}
        endIcon={<AddIcon />}
        onClick={handleOpen}
      >
        ALERTS
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.default",
            width: `calc(100% - 310px)`,
            ml: "auto",
            marginRight: "30px",
            mt: "25vh",
            borderRadius: 2,
          }}
        >
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography variant="h6">ALERTS</Typography>
            <Divider sx={{ borderColor: "#ffffff", mt: 2 }} />
          </Box>
          <Grid container>
            <Grid
              sx={{
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              item
              xs={6}
            >
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2} sx={{ pr: "10%" }}>
                  <ButtonComponent
                    alert={tempAlert.raceAlerts}
                    page={page}
                    setPage={setNewPage}
                    title="RACE ALERTS"
                  />
                  <ButtonComponent
                    alert={tempAlert.changesInTrackConditions}
                    page={page}
                    setPage={setNewPage}
                    title="CHANGES IN TRACK CONDITION"
                  />
                  <ButtonComponent
                    alert={tempAlert.eventsAreDelayed}
                    page={page}
                    setPage={setNewPage}
                    title="DELAYED EVENTS"
                  />
                  <ButtonComponent
                    alert={tempAlert.runnerBetsWithinTimeSpan}
                    page={page}
                    setPage={setNewPage}
                    title="RUNNER BETS WITHIN TIME SPAN"
                  />
                  <ButtonComponent
                    alert={tempAlert.changesInMarketMovement}
                    page={page}
                    setPage={setNewPage}
                    title="CHANGES IN MARKET MOVEMENT"
                  />
                  <ButtonComponent
                    alert={tempAlert.jockeysWithSelectRunners}
                    page={page}
                    setPage={setNewPage}
                    title="JOCKEYS W/RUNNERS"
                  />
                  <ButtonComponent
                    alert={tempAlert.wagesOverXAmount}
                    page={page}
                    setPage={setNewPage}
                    title="WAGERS OVER $X AMOUNT"
                  />
                  <ButtonComponent
                    alert={tempAlert.marketCoverageFalls}
                    page={page}
                    setPage={setNewPage}
                    title="MARKET COVERAGE FALLS"
                  />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                {page === "RACE ALERTS" && (
                  <RaceAlerts
                    alerts={tempAlert}
                    setRaceAlerts={(data: boolean) => {
                      setTempAlerts({ ...tempAlert, raceAlerts: data });
                    }}
                    clearHandler={handleClose}
                    applyHandler={apply}
                  />
                )}
                {page === "CHANGES IN TRACK CONDITION" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={trackConditions} />
                  </Box>
                )}
                {page === "RUNNER BETS WITHIN TIME SPAN" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={runner} />
                  </Box>
                )}
                {page === "DELAYED EVENTS" && (
                  <DelayedEvents
                    alerts={tempAlert}
                    setRaceAlerts={(data: boolean) => {
                      setTempAlerts({ ...tempAlert, eventsAreDelayed: data });
                    }}
                    clearHandler={handleClose}
                    applyHandler={apply}
                  />
                )}
                {page === "CHANGES IN MARKET MOVEMENT" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={marketmover} />
                  </Box>
                )}
                {page === "JOCKEYS W/RUNNERS" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={jockeyRunners} />
                  </Box>
                )}
                {page === "WAGERS OVER $X AMOUNT" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={wager} />
                  </Box>
                )}
                {page === "MARKET COVERAGE FALLS" && (
                  <Box sx={{ marginY: "10%" }}>
                    <Image layout="responsive" src={marketcoverage} />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default AlertModal;
