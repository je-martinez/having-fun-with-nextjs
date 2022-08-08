import Head from "next/head";
import React from "react";
import { HeaderLayout } from "./header";
import { SidebarLayout } from "./sidebar";

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Just Having Fun With Next.js</title>
        <meta name="description" content="Having fun while you code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarLayout />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <HeaderLayout />
        <div className="px-6 pt-6 2xl:container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
