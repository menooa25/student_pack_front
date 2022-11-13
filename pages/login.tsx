import { Layout, LayoutType } from "@components/UI";
import Head from "next/head";
import { FC } from "react";
import { Login as LoginForm } from "@components/uniq/profile";

const Login: FC & { Layout: LayoutType } = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="A pack of things thal all student gonna need"
        />
       <link rel="icon" href="/favico.svg" type="image/svg+xml" />
      </Head>

      <main>
        <LoginForm />
      </main>
    </div>
  );
};
Login.Layout = Layout;
export default Login;
