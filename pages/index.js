import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";

import { fetchAPI } from "../lib/api";

import GameList from "@components/GameList";

import BlogList from "@components/BlogList";

import React, { useRef, useState } from "react";

const Home = ({ games, blogs }) => {
  //console.log("games", games);
  //console.log("blogs", blogs);
  return (
    <>
      <Head>
        <title>Next static props test</title>
        <meta name="description" content="" />
      </Head>
      <Header />

      <h3>Game list coming from API</h3>

      <GameList gamelists={games} />

      <h3>Blog List</h3>

      <BlogList bloglists={blogs} />

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
      limit: 3,
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
