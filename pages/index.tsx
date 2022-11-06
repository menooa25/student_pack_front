import { Layout, LayoutType } from "@components/UI";
import { LessonStatusTable } from "@components/uniq";
import { RequestLessonList } from "api/schema";
import { requestLessonLis } from "api/services";
import Head from "next/head";
import { FC } from "react";
import s from "../styles/index.module.css";

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

      <footer></footer>
    </div>
  );
};
Home.Layout = Layout;
export default Home;
