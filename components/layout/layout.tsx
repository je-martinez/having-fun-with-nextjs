import Head from "next/head";
import { Suspense } from "react";
import { HeaderLayout } from "./header";
// import { SidebarLayout } from './sidebar';
import dynamic from "next/dynamic";
import ContentLayout from "./content";

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const SidebarLayout = dynamic(() => import("./sidebar"), {
    suspense: true,
  });
  return (
    <>
      <Head>
        <title>Just Having Fun With Next.js</title>
        <meta name="description" content="Having fun while you code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense>
        <SidebarLayout />
      </Suspense>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <HeaderLayout />
        <ContentLayout children={children} />
      </div>
    </>
  );
};

export default Layout;
