import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutType } from "../components/UI";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Search } from "@components/uniq";
const Noop: LayoutType = ({ children }) => <>{children}</>;

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: LayoutType } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Provider store={store}>
      <Layout search={<Search />}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
