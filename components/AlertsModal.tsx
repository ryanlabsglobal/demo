import React from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChangesInTrackCondition from "./AlertsModalSet/ChangesInTrackCondition";
import AmountOfBetsOnRunnerWithinTimeSpan from "./AlertsModalSet/AmountOfBetsOnRunnerWithinTimeSpan";
import EventsAreDelayed from "./AlertsModalSet/EventsAreDelayed";
import Grid from "@mui/material/Grid";

interface AlertProps {
  open: boolean;
  closeHandler: (arg: boolean) => any;
}
const AlertsModal: React.FC<AlertProps> = ({ open, closeHandler }) => {
  const handleClose = () => closeHandler(false);
  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.default",
            width: 950,
            mx: "auto",
            marginTop: "30vh",
            boxShadow: 24,
            borderRadius: 1,
            p: 3,
          }}
        >
          <Typography variant="h6">Fixed Alerts</Typography>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ mr: 3 }} variant="body1">
              If Events are Canceled
            </Typography>
            <Typography sx={{ mr: 3 }} variant="body1">
              If Runners are Scratched
            </Typography>
            <Typography variant="body1">If there are Jockey Changes</Typography>
          </Box>
          <Typography variant="h6">Set Alerts</Typography>
          <FormGroup row>
            <Grid container>
              <Grid item xs={4}>
                <ChangesInTrackCondition />
              </Grid>
              <Grid item xs={4}>
                <AmountOfBetsOnRunnerWithinTimeSpan />
              </Grid>
              <Grid item xs={4}>
                <EventsAreDelayed />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Changes in Market Movement"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel control={<Checkbox />} label="Race Alerts" />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Jockeys with Select Runners"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Wagers over X Amount"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Market Coverage Falls"
                />
              </Grid>
            </Grid>
          </FormGroup>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleClose}
              color="error"
              sx={{ mr: 2 }}
              variant="contained"
            >
              CANCEL
            </Button>
            <Button variant="contained">CONFIRM</Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default AlertsModal;
