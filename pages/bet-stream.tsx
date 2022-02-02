import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthComponent from "../lib/AuthComponent";
import TradingParamsBottomBar from "../components/BottomFilterComponents/TradingParamsBottomBar";
import { useRouter } from "next/router";

import tempDash from "../assets/betStream_table_v7.svg";
import { Box } from "@mui/system";

const BetStream: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Bet Stream | Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ mb: "50px", mx: 2 }}>
        <Box>
          <Image layout="responsive" src={tempDash} />
        </Box>
      </Box>
      <TradingParamsBottomBar />
    </div>
  );
};

export default AuthComponent(BetStream);
