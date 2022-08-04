import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { ContentLayout } from "./layouts/content";
import { SidebarLayout } from "./layouts/sidebar";

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
        <div>
          <h1>Hola</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
