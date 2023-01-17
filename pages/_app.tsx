import Head from "next/head";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ToastProvider, ToastViewport } from "../components/Toast";
import { useSectionInViewObserver } from "../utils/useSectionInViewObserver";

function MyApp({ Component, pageProps }: AppProps) {
  useSectionInViewObserver({ headerHeight: 72 });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={`/favicon.png`} />
        <title>Snippet Explorer by Raycast</title>

        {/* <meta
          property="og:image"
          content="https://icon.ray.so/og-image.png"
          key="og-image"
        /> */}

        <meta
          property="og:title"
          content="Snippet Explorer by Raycast"
          key="og-title"
        />
        <meta
          property="og:description"
          content="A collection of useful, fun and time-saving Raycast Snippets."
          key="og-description"
        />
        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta property="twitter:site" content="@raycastapp" />
        <meta
          name="description"
          content="A collection of useful, fun and time-saving Raycast Snippets."
        />
      </Head>
      <ToastProvider swipeDirection="down">
        <Component {...pageProps} />
        <ToastViewport />
      </ToastProvider>
    </>
  );
}

export default MyApp;
