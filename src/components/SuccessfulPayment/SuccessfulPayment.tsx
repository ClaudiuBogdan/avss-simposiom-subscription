import { FC, useEffect, useState } from "react";

export const SuccessfulPayment: FC = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      window.location.href = "/";
    }
  }, [seconds]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Plata a fost efectuata cu succes!
        </h1>
        <p className="text-xl text-center mt-8">
          In curand veti primi un email cu informatii despre plata
          dumneavoastra.
        </p>
        <p className="text-xl text-center mt-2">
          Veti fi redirectionat catre pagina principala in {seconds} secunde.
        </p>
      </div>
    </div>
  );
};
