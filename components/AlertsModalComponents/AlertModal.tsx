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
import { Alert, AlertTitle } from "@mui/material";
//SVG place holders
import runner from "../../assets/runnerBets_tabContent.svg";
import trackConditions from "../../assets/trackCondition_new.svg";
import marketmover from "../../assets/marketMovement_new.svg";
import wager from "../../assets/wagerAmounts_new.svg";
import marketcoverage from "../../assets/marketCoverage_new.svg";
import jockeyRunners from "../../assets/jockeyRunners_new.svg";
import timeSpan from "../../assets/timeSpan_new.svg";
import alertStandard from "../../assets/alerstStandard.svg";

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
        sx={{ mr: 3, width: 105 }}
        endIcon={<AddIcon />}
        onClick={handleOpen}
      >
        ALERTS
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <Box
            sx={{
              bgcolor: "background.default",
              width: `calc(100% - 310px)`,
              ml: "auto",
              marginRight: "30px",
              mt: "20vh",
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
                      alert={tempAlert.eventsAreDelayed}
                      page={page}
                      setPage={setNewPage}
                      title="DELAYED EVENTS"
                    />
                    <ButtonComponent
                      alert={tempAlert.changesInTrackConditions}
                      page={page}
                      setPage={setNewPage}
                      title="TRACK CONDITION"
                    />
                    <ButtonComponent
                      alert={tempAlert.runnerBetsWithinTimeSpan}
                      page={page}
                      setPage={setNewPage}
                      title="BETS WITHIN TIME SPAN"
                    />

                    <ButtonComponent
                      alert={tempAlert.changesInMarketMovement}
                      page={page}
                      setPage={setNewPage}
                      title="MARKET MOVEMENT"
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
                      title="WAGERS AMOUNT"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="MARKET COVERAGE"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="NEW RELEASES"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="GENERAL MESSAGING"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="CANCELLED EVENTS"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="SYSTEM ISSUES"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="JOCKEY CHANGES"
                    />
                    <ButtonComponent
                      alert={tempAlert.marketCoverageFalls}
                      page={page}
                      setPage={setNewPage}
                      title="SCRATCHINGS"
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
                  {page === "BETS WITHIN TIME SPAN" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={timeSpan} />
                    </Box>
                  )}
                  {page === "TRACK CONDITION" && (
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
                  {page === "MARKET MOVEMENT" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={marketmover} />
                    </Box>
                  )}
                  {page === "JOCKEYS W/RUNNERS" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={jockeyRunners} />
                    </Box>
                  )}
                  {page === "WAGERS AMOUNT" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={wager} />
                    </Box>
                  )}
                  {page === "MARKET COVERAGE" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={marketcoverage} />
                    </Box>
                  )}
                  {page === "NEW RELEASES" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                  {page === "GENERAL MESSAGING" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                  {page === "CANCELLED EVENTS" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                  {page === "SYSTEM ISSUES" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                  {page === "JOCKEY CHANGES" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                  {page === "SCRATCHINGS" && (
                    <Box sx={{ marginY: "10%" }}>
                      <Image layout="responsive" src={alertStandard} />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Alert
            sx={{
              borderRadius: 1,
              width: `calc(100% - 310px)`,
              ml: "auto",
              marginRight: "30px",
              mt: 2,
              backgroundColor: "rgba(0, 154, 255, .38)",
              color: "#fff",
              fontWeight: "bold",
            }}
            severity="error"
            variant="filled"
          >
            <AlertTitle sx={{ fontWeight: "bold" }}>How this works</AlertTitle>
            Set alerts to remind you how far out a race is from jump
          </Alert>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AlertModal;
