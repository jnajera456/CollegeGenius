import {AppProps} from 'next/app';
import Layout from '../layout';
import { Inter } from "next/font/google";
import '../globals.css';
import React from 'react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "500", "400"], //semi-bold, medium, regular
});

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}