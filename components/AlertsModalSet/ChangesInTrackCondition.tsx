import React from "react";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ChangesInTrackCondition: React.FC = (props) => {
  const [changesInTrackConditions, setChangesInTrackConditions] =
    React.useState(false);
  const [changesInTrackConditionsModal, setChangesInTrackConditionsModal] =
    React.useState(false);
  const newChangesInTrackConditions = (e: any) => {
    setChangesInTrackConditions(e.target.checked);
    setChangesInTrackConditionsModal(e.target.checked);
  };
  const handleCloseChangesInTrackConditions = () => {
    setChangesInTrackConditions(false);
    setChangesInTrackConditionsModal(false);
  };
  const handleConfirm = () => setChangesInTrackConditionsModal(false);
  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={changesInTrackConditions}
            onChange={newChangesInTrackConditions}
          />
        }
        label="Changes in Track Condition"
      />
      <Modal
        onClose={handleCloseChangesInTrackConditions}
        open={changesInTrackConditionsModal}
      >
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
            Changes in Track Conditions
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
              onClick={handleCloseChangesInTrackConditions}
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

export default ChangesInTrackCondition;
