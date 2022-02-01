import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import { grey } from "@mui/material/colors";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import UserContext from "../../store/UserContext";
import { styled } from "@mui/material/styles";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff",
  },
});

const BusinessIntelligenceTabs = () => {
  const [value, setValue] = React.useState(0);
  const { businessIntelTabs, setBusinessIntelTabs } =
    React.useContext(UserContext);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setBusinessIntelTabs(newValue);
  };
  const newColor = grey[500];
  return (
    <AntTabs
      sx={{ mx: "auto" }}
      value={businessIntelTabs}
      onChange={handleChange}
      aria-label="icon tabs example"
    >
      <Tab
        icon={<BallotOutlinedIcon sx={{ color: "#ffffff" }} />}
        aria-label="phone"
      />
      <Tab
        icon={<WatchLaterOutlinedIcon sx={{ color: "#fff" }} />}
        aria-label="favorite"
      />
      <Tab
        icon={<AttachMoneyOutlinedIcon sx={{ color: "#fff" }} />}
        aria-label="person"
      />
    </AntTabs>
  );
};

export default BusinessIntelligenceTabs;
