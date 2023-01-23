import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const CanceledPayment: FC = () => {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      router.replace("/");
    }
  }, [seconds, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Plata a fost anulata!
        </h1>
        <p className="text-xl text-center mt-2">
          Veti fi redirectionat catre pagina principala in {seconds} secunde.
        </p>
      </div>
    </div>
  );
};
