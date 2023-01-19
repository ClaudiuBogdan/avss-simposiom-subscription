import Head from "next/head";

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
          <a href="/registration">Register</a>
        </button>
      </main>
    </>
  );
}
