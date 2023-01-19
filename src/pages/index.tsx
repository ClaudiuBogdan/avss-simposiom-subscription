import Head from "next/head";
import { UserForm } from "@/components/UserForm";

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
        <UserForm />
      </main>
    </>
  );
}
