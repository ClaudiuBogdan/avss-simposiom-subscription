import { About } from "@/components/About";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="ASVV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
      </main>
    </>
  );
}
