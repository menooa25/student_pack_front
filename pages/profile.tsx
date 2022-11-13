import { Layout, LayoutType } from "@components/UI";
import Head from "next/head";
import { FC } from "react";

export const getServerSideProps = async () => {
  console.log("im in serverside props");
  return { props: {} };
};
const Profile: FC & { Layout: LayoutType } = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta
          name="description"
          content="A pack of things thal all student gonna need"
        />
        <link rel="icon" href="/favico.svg" type="image/svg+xml" />
      </Head>

      <main>
        <h1>profile page</h1>
      </main>
    </div>
  );
};
Profile.Layout = Layout;
export default Profile;
