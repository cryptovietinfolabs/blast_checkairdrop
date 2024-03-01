import "../styles/app.scss";

import type { Metadata } from "next";
import Head from "next/head";

import { nunito } from "@/constants/fonts";
import { config } from "@/wagmi/config";

import Providers from "./providers";
import Template from "./template";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
  title: "Blast Airdrop",
  description: "Blast Airdrop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const initialState = cookieToInitialState(config, headers().get("cookie"))!;

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
      </Head>
      <body className={` ${nunito.className}`}>
        <Providers initialState={initialState}>
          <Header />
          <Template>{children}</Template>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
