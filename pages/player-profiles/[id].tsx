import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AuthComponent from "../../lib/AuthComponent";

import { Box } from "@mui/system";
import Dash1 from "../../assets/busIntel_allRow1.svg";
import Dash2 from "../../assets/busIntel_allRow2.svg";
import Dash3 from "../../assets/busIntel_allRow3.svg";
import TradingParamsBottomBar from "../../components/BottomFilterComponents/TradingParamsBottomBar";

import React from "react";

const PlayerProfile: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Player Profiles | Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <TradingParamsBottomBar />
    </div>
  );
};

export default AuthComponent(PlayerProfile);
