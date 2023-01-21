import { CanceledPayment } from "@/components/CanceledPayment";
import Head from "next/head";

export default function CanceledPaymentPage() {
  return (
    <>
      <Head>
        <title>Canceled payment</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="successful payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CanceledPayment />
    </>
  );
}
