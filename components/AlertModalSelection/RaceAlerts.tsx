import React from "react";
import { Checkbox, Typography } from "@mui/material";
import classes from "./ChangesInTrackCondition.module.css";
import { Switch } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ChangesInTrackConditionInterface {
  closeHandler: any;
}

const RaceAlerts: React.FC<ChangesInTrackConditionInterface> = (props) => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div>
      <table style={{ width: "100%", marginTop: "15%", marginLeft: "10px" }}>
        <tr>
          <th></th>
          <th>ALERT 1</th>
          <th>ALERT 2</th>
          <th>ALERT 3</th>
        </tr>
        <tr className={classes.row}>
          <td>ENABLE ALERT</td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
        </tr>
        <tr>
          <td>PLAY SOUND</td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
          <td style={{ textAlign: "center" }}>
            <Checkbox disabled={!enabled} />
          </td>
        </tr>
        <tr>
          <td>
            <Switch
              value={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              color="success"
            />
            <br />
            {!enabled ? (
              <Typography>Disabled</Typography>
            ) : (
              <Typography>Enabled</Typography>
            )}
          </td>
          <td style={{ textAlign: "center" }}>
            <FormControl
              disabled={!enabled}
              variant="standard"
              sx={{ m: 1, minWidth: 80 }}
            >
              <InputLabel sx={{ color: "white" }}>5 Mins</InputLabel>
              <Select disabled={!enabled} label="5 Mins">
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
              disabled={!enabled}
              variant="standard"
              sx={{ m: 1, minWidth: 80 }}
            >
              <InputLabel sx={{ color: "white" }}>10 Mins</InputLabel>
              <Select
                disabled={!enabled}
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
              disabled={!enabled}
              variant="standard"
              sx={{ m: 1, minWidth: 80 }}
            >
              <InputLabel sx={{ color: "white" }}>15 Mins +</InputLabel>
              <Select disabled={!enabled} label="15 Mins +">
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
      </table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={props.closeHandler}
          variant="contained"
          color="error"
          sx={{ mt: 10, mr: 2 }}
        >
          CLEAR
        </Button>
        <Button
          onClick={props.closeHandler}
          variant="contained"
          sx={{ mt: 10, mr: 2 }}
        >
          APPLY
        </Button>
      </Box>
    </div>
  );
};

export default RaceAlerts;
