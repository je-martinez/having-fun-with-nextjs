import Head from "next/head";
import { ReactElement, useEffect } from "react";
import Layout from "../components/layout/layout";
import { NextPageWithLayout } from "../shared/types/layout.types";

const Home: NextPageWithLayout = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <main>
        <p>Hola como estas</p>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
