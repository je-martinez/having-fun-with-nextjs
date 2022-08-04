import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { ContentLayout } from "../components/layout/content";
import { SidebarLayout } from "../components/layout/sidebar";

const Home: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Just Having Fun With Next.js</title>
        <meta name="description" content="Having fun while you code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarLayout />
        <ContentLayout />
      </main>
    </div>
  );
};

export default Home;
