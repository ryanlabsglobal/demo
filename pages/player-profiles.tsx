import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AuthComponent from "../lib/AuthComponent";
import TradingParamsBottomBar from "../components/BottomFilterComponents/TradingParamsBottomBar";
import { useRouter } from "next/router";

import tempDash from "../assets/playerProfiles_table.svg";
import { Box } from "@mui/system";

const PlayerProfiles: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Player Profiles | Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ mb: "50px", mx: 2 }}>
        <Box onClick={() => router.push("./player-profiles/20350")}>
          <Image layout="responsive" src={tempDash} />
        </Box>
      </Box>
      <TradingParamsBottomBar />
    </div>
  );
};

export default AuthComponent(PlayerProfiles);
