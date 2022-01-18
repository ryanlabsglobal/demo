import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthComponent from "../lib/AuthComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Odds Engine +</title>
        <meta name="description" content="Next gen betting systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Hello</h2>
    </div>
  );
};

export default AuthComponent(Home);
