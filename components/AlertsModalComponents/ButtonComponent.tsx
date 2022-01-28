import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const enabled = {
  bgcolor: "rgba(21, 181, 15, .38)",
};

const disabled = {
  bgcolor: "rgba(255, 255, 255, .16)",
};

const active = {
  bacolor: "rgba(26, 134, 172, 1)",
};

interface ButtonComponent {
  title: string;
  page: string;
  alert: boolean;
  setPage: any;
}

const ButtonComponent: React.FC<ButtonComponent> = (props) => {
  const { title } = props;
  return (
    <Grid item xs={12} sm={12} lg={6}>
      {props.page === title ? (
        <Button variant="contained" fullWidth sx={active}>
          {title}
        </Button>
      ) : (
        <Button
          fullWidth
          variant="contained"
          sx={props.alert ? enabled : disabled}
          onClick={() => props.setPage(title)}
        >
          {title}
        </Button>
      )}
    </Grid>
  );
};

export default ButtonComponent;
