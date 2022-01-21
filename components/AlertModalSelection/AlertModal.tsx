import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { Divider } from "@mui/material";
import Image from "next/image";
import ChangesInTrackCondition from "./ChangesInTrackCondition";

//SVG place holders
import runner from "../../assets/runnerBets_tabContent.svg";
import trackConditions from "../../assets/trackConditions_tabContent.svg";
import eventdelay from "../../assets/eventsDelayed_tabContent.svg";
import marketmover from "../../assets/marketMovement_tabContent.svg";
import jockeyRunners from "../../assets/jockeysRunners_tabContent.svg";
import wager from "../../assets/wagerAmount_tabContent.svg";
import marketcoverage from "../../assets/marketCoverage_tabContent.svg";

const active = {
  backgroundColor: "rgba(255, 255, 255, 0.38)",
  padding: "5px 15px",
  cursor: "pointer",
  borderRadius: 3,
};
const inactive = {
  padding: "5px",
  cursor: "pointer",
};

const AlertModal = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("RACE ALERTS");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <Button variant="contained" sx={{ mr: 3 }} onClick={handleOpen}>
        ALERTS
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.default",
            width: 950,
            mx: "auto",
            mt: "25vh",
            borderRadius: 2,
          }}
        >
          <Grid container>
            <Grid
              sx={{
                bgcolor: "background.paper",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              item
              xs={4}
            >
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">FIXED ALERTS</Typography>
                <Divider sx={{ borderColor: "#ffffff", my: 2 }} />
                <Typography variant="h6">SET ALERTS</Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {page === "RACE ALERTS" ? (
                    <li style={active}>RACE ALERTS</li>
                  ) : (
                    <li onClick={() => setPage("RACE ALERTS")} style={inactive}>
                      RACE ALERTS
                    </li>
                  )}
                  {page === "CHANGES IN TRACK CONDITION" ? (
                    <li style={active}>CHANGES IN TRACK CONDITION</li>
                  ) : (
                    <li
                      onClick={() => setPage("CHANGES IN TRACK CONDITION")}
                      style={inactive}
                    >
                      CHANGES IN TRACK CONDITION
                    </li>
                  )}
                  {page === "RUNNER BETS WITHIN TIME SPAN" ? (
                    <li style={active}>RUNNER BETS WITHIN TIME SPAN</li>
                  ) : (
                    <li
                      onClick={() => setPage("RUNNER BETS WITHIN TIME SPAN")}
                      style={inactive}
                    >
                      RUNNER BETS WITHIN TIME SPAN
                    </li>
                  )}
                  {page === "EVENTS ARE DELAYED" ? (
                    <li style={active}>EVENTS ARE DELAYED</li>
                  ) : (
                    <li
                      onClick={() => setPage("EVENTS ARE DELAYED")}
                      style={inactive}
                    >
                      EVENTS ARE DELAYED
                    </li>
                  )}
                  {page === "CHANGES IN MARKET MOVEMENT" ? (
                    <li style={active}>CHANGES IN MARKET MOVEMENT</li>
                  ) : (
                    <li
                      onClick={() => setPage("CHANGES IN MARKET MOVEMENT")}
                      style={inactive}
                    >
                      CHANGES IN MARKET MOVEMENT
                    </li>
                  )}

                  {page === "JOCKEYS WITH SELECT RUNNERS" ? (
                    <li style={active}>JOCKEYS WITH SELECT RUNNERS</li>
                  ) : (
                    <li
                      onClick={() => setPage("JOCKEYS WITH SELECT RUNNERS")}
                      style={inactive}
                    >
                      JOCKEYS WITH SELECT RUNNERS
                    </li>
                  )}
                  {page === "WAGERS OVER $X AMOUNT" ? (
                    <li style={active}>WAGERS OVER $X AMOUNT</li>
                  ) : (
                    <li
                      onClick={() => setPage("WAGERS OVER $X AMOUNT")}
                      style={inactive}
                    >
                      WAGERS OVER $X AMOUNT
                    </li>
                  )}
                  {page === "MARKET COVERAGE FALLS" ? (
                    <li style={active}>MARKET COVERAGE FALLS</li>
                  ) : (
                    <li
                      onClick={() => setPage("MARKET COVERAGE FALLS")}
                      style={inactive}
                    >
                      MARKET COVERAGE FALLS
                    </li>
                  )}
                </ul>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                {page === "RACE ALERTS" && (
                  <ChangesInTrackCondition closeHandler={handleClose} />
                )}
                {page === "CHANGES IN TRACK CONDITION" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={trackConditions} />
                  </Box>
                )}
                {page === "RUNNER BETS WITHIN TIME SPAN" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={runner} />
                  </Box>
                )}
                {page === "EVENTS ARE DELAYED" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={eventdelay} />
                  </Box>
                )}
                {page === "CHANGES IN MARKET MOVEMENT" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={marketmover} />
                  </Box>
                )}
                {page === "JOCKEYS WITH SELECT RUNNERS" && (
                  <Box sx={{ marginTop: "10%" }}>
                    <Image src={jockeyRunners} />
                  </Box>
                )}
                {page === "WAGERS OVER $X AMOUNT" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={wager} />
                  </Box>
                )}
                {page === "MARKET COVERAGE FALLS" && (
                  <Box sx={{ marginTop: "20%" }}>
                    <Image src={marketcoverage} />
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
