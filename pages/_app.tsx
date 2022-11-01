import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutType } from "../components/UI";

const Noop: LayoutType = ({ children }) => <>{children}</>;

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: LayoutType } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
