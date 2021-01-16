import React, { ReactNode } from "react";
import Head from "next/head";

const Layout = ({ children, title }: { children?: ReactNode; title: string }) => (
  <>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=v2" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=v2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=v2" />
      <link rel="manifest" href="/site.webmanifest?v=v2" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=v2" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico?v=v2" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />

      <script async defer data-website-id="f555f542-14e4-47ec-9c64-615f0b8ff286" src="https://a.chiya.dev/umami.js" />
    </Head>

    {children}
  </>
);

export default Layout;
