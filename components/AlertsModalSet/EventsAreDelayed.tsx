import React from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EventsAreDelayed: React.FC = (props) => {
  const [eventsAreDelayed, setEventsAreDelayed] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const newEdit = (e: any) => {
    setEventsAreDelayed(e.target.checked);
    setModal(e.target.checked);
  };
  const cancelEditHandler = () => {
    setEventsAreDelayed(false);
    setModal(false);
  };
  const handleConfirm = () => setModal(false);
  return (
    <React.Fragment>
      <FormControlLabel
        control={<Checkbox checked={eventsAreDelayed} onChange={newEdit} />}
        label="Events are Delayed"
      />
      <Modal onClose={cancelEditHandler} open={modal}>
        <Box
          sx={{
            bgcolor: "background.default",
            width: 800,
            mx: "auto",
            marginTop: "35vh",
            boxShadow: 24,
            borderRadius: 1,
            p: 3,
          }}
        >
          <Typography sx={{ mb: 3 }} variant="h6">
            Events are Delayed
          </Typography>
          <table style={{ width: "65%" }}>
            <tr>
              <th style={{ width: "30%" }}></th>
              <th style={{ textAlign: "center" }}>Alert 1</th>
              <th style={{ textAlign: "center" }}>Alert 2</th>
              <th style={{ textAlign: "center" }}>Alert 3</th>
            </tr>
            <tr>
              <td>Enable Alert</td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
            </tr>
            <tr>
              <td>Play Sound</td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
              <td style={{ textAlign: "center" }}>
                <Checkbox />
              </td>
            </tr>
          </table>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ mr: 2 }}
              color="error"
              variant="contained"
              onClick={cancelEditHandler}
            >
              CANCEL
            </Button>
            <Button onClick={handleConfirm} variant="contained">
              CONFIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default EventsAreDelayed;
