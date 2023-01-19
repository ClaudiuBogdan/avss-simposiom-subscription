import Link from "next/link";

export default function CanceledPayment() {
  return (
    <>
      <h1>Payment canceled</h1>
      <button>
        <Link href="/">Go back to home</Link>
      </button>
    </>
  );
}
