import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AuthComponent from "../lib/AuthComponent";
import Box from "@mui/system/Box";
import Dash1 from "../assets/dashCont_busIntl_row1 (1).svg";
import Dash2 from "../assets/dashCont_busIntl_row2 (1).svg";
import Dash3 from "../assets/dashCont_busIntl_row3 (1).svg";

import TradingParamsBottomBar from "../components/BottomFilterComponents/TradingParamsBottomBar";

const Business: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Business Intelligence | Odds Engine +</title>
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

export default AuthComponent(Business);
