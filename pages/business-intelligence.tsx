import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AuthComponent from "../lib/AuthComponent";
import Box from "@mui/system/Box";
import Dash1 from "../assets/busIntel_allRow1.svg";
import Dash2 from "../assets/busIntel_allRow2.svg";
import Dash3 from "../assets/busIntel_allRow3.svg";
import Dash4 from "../assets/busIntel_timeRow1.svg";
import Dash5 from "../assets/busIntel_cashRow1.svg";
import Dash6 from "../assets/busIntel_cashRow2.svg";
import UserContext from "../store/UserContext";
import TradingParamsBottomBar from "../components/BottomFilterComponents/TradingParamsBottomBar";

const Business: NextPage = () => {
  const { businessIntelTabs } = React.useContext(UserContext);
  return (
    <div>
      <Head>
        <title>Business Intelligence | Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {businessIntelTabs === 0 && (
        <Box sx={{ mb: "100px" }}>
          <Box sx={{ mx: 2, mt: 1 }}>
            <Image src={Dash1} layout="responsive" />
          </Box>
          <Box sx={{ mx: 2, mt: 2 }}>
            <Image src={Dash2} layout="responsive" />
          </Box>
          <Box sx={{ mx: 2, mt: 2 }}>
            <Image src={Dash3} layout="responsive" />
          </Box>
        </Box>
      )}
      {businessIntelTabs === 1 && (
        <Box sx={{ mb: "100px" }}>
          <Box sx={{ mx: 2, mt: 1 }}>
            <Image src={Dash4} layout="responsive" />
          </Box>
        </Box>
      )}
      {businessIntelTabs === 2 && (
        <Box sx={{ mb: "100px" }}>
          <Box sx={{ mx: 2, mt: 1 }}>
            <Image src={Dash5} layout="responsive" />
          </Box>
          <Box sx={{ mx: 2, mt: 1 }}>
            <Image src={Dash6} layout="responsive" />
          </Box>
        </Box>
      )}
      <TradingParamsBottomBar />
    </div>
  );
};

export default AuthComponent(Business);
