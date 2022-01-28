import React from "react";
import { Checkbox, Typography } from "@mui/material";
import { Switch } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import UserContext from "../../store/UserContext";

interface ChangesInTrackConditionInterface {
  clearHandler: any;
  applyHandler: any;
  alerts: any;
  setRaceAlerts: any;
}

const DelayedEvents: React.FC<ChangesInTrackConditionInterface> = ({
  alerts,
  clearHandler,
  applyHandler,
  setRaceAlerts,
}) => {
  return (
    <div>
      <table style={{ width: "100%", marginTop: "10%", marginLeft: "10px" }}>
        <thead>
          <tr>
            <th>
              <Box sx={{ display: "flex" }}>
                <Switch
                  checked={alerts.eventsAreDelayed}
                  onChange={(e) => setRaceAlerts(e.target.checked)}
                  color="success"
                />

                {alerts.eventsAreDelayed === false ? (
                  <Typography sx={{ mt: 1, color: "rgba(255, 255, 255, .40)" }}>
                    Disabled
                  </Typography>
                ) : (
                  <Typography sx={{ mt: 1, color: "rgba(255, 255, 255, .40)" }}>
                    Enabled
                  </Typography>
                )}
              </Box>
            </th>
            <th>ALERT 1</th>
            <th>ALERT 2</th>
            <th>ALERT 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ENABLE ALERT</td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
          </tr>
          <tr>
            <td>PLAY SOUND</td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ textAlign: "center" }}>
              <FormControl
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
                variant="standard"
                sx={{ m: 1, minWidth: 80 }}
              >
                <InputLabel sx={{ color: "white" }}>5 Mins</InputLabel>
                <Select
                  disabled={
                    alerts === undefined ? false : !alerts.eventsAreDelayed
                  }
                  label="5 Mins"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem>Ten</MenuItem>
                  <MenuItem>Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
                </Select>
              </FormControl>
            </td>
            <td style={{ textAlign: "center" }}>
              <FormControl
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
                variant="standard"
                sx={{ m: 1, minWidth: 80 }}
              >
                <InputLabel sx={{ color: "white" }}>10 Mins</InputLabel>
                <Select
                  disabled={
                    alerts === undefined ? false : !alerts.eventsAreDelayed
                  }
                  sx={{ borderColor: "#ffffff" }}
                  label="10 Mins"
                >
                  <MenuItem>Ten</MenuItem>
                  <MenuItem>Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
                </Select>
              </FormControl>
            </td>
            <td style={{ textAlign: "center" }}>
              <FormControl
                disabled={
                  alerts === undefined ? false : !alerts.eventsAreDelayed
                }
                variant="standard"
                sx={{ m: 1, minWidth: 80 }}
              >
                <InputLabel sx={{ color: "white" }}>15 Mins +</InputLabel>
                <Select
                  disabled={
                    alerts === undefined ? false : !alerts.eventsAreDelayed
                  }
                  label="15 Mins +"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem>Ten</MenuItem>
                  <MenuItem>Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
                </Select>
              </FormControl>
            </td>
          </tr>
        </tbody>
      </table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mb: 3,
        }}
      >
        <Button
          onClick={clearHandler}
          variant="contained"
          color="error"
          sx={{ mt: 10, mr: 2 }}
        >
          CLEAR
        </Button>
        <Button
          onClick={applyHandler}
          variant="contained"
          sx={{ mt: 10, mr: 2 }}
        >
          APPLY
        </Button>
      </Box>
    </div>
  );
};

export default DelayedEvents;
