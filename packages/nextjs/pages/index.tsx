import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Comparison from "~~/components/Comparison";
import Earning from "~~/components/Earning";
import FAQ from "~~/components/FAQ";
import Feature from "~~/components/Feature";
import Hero from "~~/components/Hero";
// import Layout from "~~/components/Layout/Layout";
import Reviews from "~~/components/Reviews";
import TwoColorDivWithSlantLink from "~~/components/blockexplorer/TwoColorBackground";

const Home: NextPageWithLayout = () => {
  return <div>Home Page</div>;
  return (
    <>
      <Hero />
      <Feature />
      <Comparison />
      <Earning />
      <TwoColorDivWithSlantLink />
      <Reviews />
      <FAQ />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  // return <Layout>{page}</Layout>;
  return <>{page}</>;
};

export default Home;
