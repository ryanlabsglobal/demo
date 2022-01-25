import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ClosedFilterBar from "./ClosedFilterBar";
import OpenFilterByType from "./OpenFilterByType";
import OpenCountrySelector from "./OpenCountrySelector";
import OpenFilterSelectors from "./OpenFilterSelectors";
import OpenRangeSlider from "./OpenRangeSlider";

const TradingParamsBottomBar = () => {
  const [open, setOpen] = React.useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

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
          <OpenFilterByType />
          <Grid container>
            <OpenCountrySelector />
            <Grid xs={6} item>
              <OpenFilterSelectors />
              <Typography variant="h6">Ranges</Typography>
              <OpenRangeSlider />
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
