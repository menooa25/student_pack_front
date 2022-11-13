import { Layout, LayoutType } from "@components/UI";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { Profile as ProfileComponent } from "@components/uniq/profile";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const access_token = cookies["access"];
  if (!access_token)
    return {
      redirect: {
        permanent: true,
        destination: "/login",
      },
    };
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
        <ProfileComponent />
      </main>
    </div>
  );
};
Profile.Layout = Layout;
export default Profile;
