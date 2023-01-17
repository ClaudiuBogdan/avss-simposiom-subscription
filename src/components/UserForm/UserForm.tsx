"use client";
import { FC } from "react";
import { UserFormData } from "./types";
import { useContainer } from "./useContainer";
import { UserFormComponent } from "./UserFormComponent";

export const UserForm: FC = () => {
  const { createUser, data, error, loading } = useContainer();

  const handleSubmit = (data: UserFormData) => {
    console.log("handleSubmit", data);
    createUser(data);
  };

  return (
    <section>
      <UserFormComponent
        // disabled={loading || data}
        onSubmit={handleSubmit}
      />
      {loading && <p>Loading...</p>}
      {data && <p>{JSON.stringify(data)}</p>}
      {error && (
        <div
          className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Danger</span>
          <div>
            <span className="font-medium">
              Ensure that these requirements are met:
            </span>
            <ul className="mt-1.5 ml-4 list-disc list-inside">
              {error.map((error: string) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
