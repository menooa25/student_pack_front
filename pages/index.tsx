import { Layout, LayoutType } from "@components/UI";
import { LessonStatusTable } from "@components/uniq";
import Head from "next/head";
import { FC } from "react";

const Home: FC & { Layout: LayoutType } = () => {
  return (
    <div>
      <Head>
        <title>Student Pack</title>
        <meta
          name="description"
          content="A pack of things thal all student gonna need"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-1">
        <LessonStatusTable />
      </main>
    </div>
  );
};
Home.Layout = Layout;
export default Home;
