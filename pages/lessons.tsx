import { Layout, LayoutType } from "@components/UI";
import { Profile } from "@components/uniq/profile";
import { UserDetail } from "api/schema";
import { requestUserDetail } from "api/services";
import { request } from "https";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

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

  return {
    props: {},
  };
};

const EditProfile: FC & { Layout: LayoutType } = () => {
  return (
    <div>
      <Head>
        <title>دروس</title>
        <meta
          name="description"
          content="A pack of things thal all student gonna need"
        />
        <link rel="icon" href="/favico.svg" type="image/svg+xml" />
      </Head>

      <main>
        <Profile />
      </main>
    </div>
  );
};
EditProfile.Layout = Layout;
export default EditProfile;
