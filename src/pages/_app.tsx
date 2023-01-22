import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Messenger } from "@/components/Messenger";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Messenger />
      <Analytics />
    </>
  );
}
