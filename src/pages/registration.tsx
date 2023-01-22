import { Messenger } from "@/components/Messenger";
import { UserForm } from "@/components/UserForm";
import Head from "next/head";

export default function Registration() {
  return (
    <div className="p-4">
      <Head>
        <title>Registration</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-center p-4 mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Formular de inregistrare pentru Simpozionul &quot;Zilele Medicinei de
          Urgenta Sibiene&quot;
        </h1>
        <main>
          <UserForm />
        </main>
      </div>
      <Messenger />
    </div>
  );
}
