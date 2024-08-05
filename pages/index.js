import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React, { useRef, useState } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lasthash</title>
        <meta name="description" content="" />
      </Head>
      <Header HeaderType="header-absolute" />

      

      <Footer />
    </>
  );
};

export default Home;
