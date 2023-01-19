import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>AVSS</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="ASVV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome!</h1>
        <button>
          <Link href="/registration">Register</Link>
        </button>
      </main>
    </>
  );
}
