import { SuccessfulPayment } from "@/components/SuccessfulPayment";
import Head from "next/head";

export default function SuccessfulPaymentPage() {
  return (
    <>
      <Head>
        <title>Successful payment</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="successful payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuccessfulPayment />
    </>
  );
}
