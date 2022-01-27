import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AuthComponent from "../lib/AuthComponent";

const BetStream: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bet Stream | Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Hello Bet Stream</h2>
    </div>
  );
};

export default AuthComponent(BetStream);
