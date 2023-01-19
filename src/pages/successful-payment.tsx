import Link from "next/link";

export default function SuccessfulPayment() {
  return (
    <>
      <h1>Payment successful</h1>
      <button>
        <Link href="/">Go back to home</Link>
      </button>
    </>
  );
}
