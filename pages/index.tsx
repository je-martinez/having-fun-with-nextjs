import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { ContentLayout } from "./layouts/content";
import { FooterLayout } from "./layouts/footer";
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
      </main>

      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};

export default Home;
