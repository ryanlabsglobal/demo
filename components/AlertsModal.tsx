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
            width: 900,
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
            <ChangesInTrackCondition />
            <AmountOfBetsOnRunnerWithinTimeSpan />
            <EventsAreDelayed />
            <FormControlLabel
              control={<Checkbox />}
              label="Changes in Market Movement"
            />
            <FormControlLabel control={<Checkbox />} label="Race Alerts" />
            <FormControlLabel
              control={<Checkbox />}
              label="Jockeys with Select Runners"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Wagers over X Amount"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Market Coverage Falls"
            />
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
