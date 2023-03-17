import React from "react";
import Head from "next/head";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ToastProvider, ToastViewport } from "../components/Toast";
import { useSectionInViewObserver } from "../utils/useSectionInViewObserver";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const [enableViewObserver, setEnableViewObserver] = React.useState(false);
  useSectionInViewObserver({ headerHeight: 72, enabled: enableViewObserver });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={`/favicon.png`} />
        <title>Snippet Explorer by Raycast</title>

        <meta
          property="og:image"
          content="https://snippets.ray.so/og-image.png"
          key="og-image"
        />

        <meta
          property="og:title"
          content="Snippet Explorer by Raycast"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Snippet Explorer is a tool to easily browse and import
          Snippets directly to Raycast."
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
          content="Snippet Explorer is a tool to easily browse and import
          Snippets directly to Raycast."
        />
      </Head>
      <ToastProvider swipeDirection="down">
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-jetbrains: ${jetBrainsMono.style.fontFamily};
          }
        `}</style>
        <Component
          {...pageProps}
          onTouchReady={() => setEnableViewObserver(true)}
        />
        <ToastViewport />
      </ToastProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
