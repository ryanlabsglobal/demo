import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthComponent from "../../lib/AuthComponent";
import { Grid } from "@mui/material";

import g from "../../assets/bet statistics.png";
import c from "../../assets/day of week.png";
import e from "../../assets/generosity.png";
import h from "../../assets/key customers.png";
import k from "../../assets/odds range.png";
import f from "../../assets/product type.png";
import d from "../../assets/profit and loss.png";
import j from "../../assets/time series.png";
import { Box } from "@mui/system";
import TradingParamsBottomBar from "../../components/TradingParamsBottomBar";

import React from "react";

const PlayerProfile: NextPage = () => {
  const router = useRouter();
  console.log(router.route);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid sx={{ pt: 2, pl: 2, pr: 2, mb: "120px" }} container spacing={2}>
        <Grid item xs={8}>
          <Image layout="responsive" src={d} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={e} />
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mb: 2 }}>
            <Image layout="responsive" src={g} />
          </Box>
          <Image layout="responsive" src={g} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={f} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={j} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={c} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={k} />
        </Grid>
        <Grid item xs={4}>
          <Image layout="responsive" src={h} />
        </Grid>
      </Grid>
      <TradingParamsBottomBar />
    </div>
  );
};

export default AuthComponent(PlayerProfile);
