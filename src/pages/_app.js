import "../styles/theme.less";
import React from 'react';
import Layout from "../components/layout/layout";
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
