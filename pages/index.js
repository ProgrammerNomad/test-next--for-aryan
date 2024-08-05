import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";

import GameList from "@components/GameList";

import BloList from "@components/BloList";

import React, { useRef, useState } from "react";

const Home = ({ games, blogs }) => {
  return (
    <>
      <Head>
        <title>Lasthash</title>
        <meta name="description" content="" />
      </Head>
      <Header />

      <h3>Game list coming from API</h3>

      <GameList />

      <h3>Blog List</h3>

      <BloList />

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [gamesRes, blogsRes] = await Promise.all([
    fetchAPI("/games/popular", {
      sort: ["id:desc"],
    }),
    fetchAPI("/blogs", {
      sort: ["id:desc"],
    }),
  ]);

  return {
    props: {
      games: gamesRes,
      blogs: blogsRes,
    },
    revalidate: 1,
  };
}

export default Home;
