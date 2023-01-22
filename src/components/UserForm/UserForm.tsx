"use client";
import { FC, useEffect } from "react";
import { Errors } from "./Errors";
import { FormState } from "./types";
import { useContainer } from "./useContainer";
import { UserFormComponent } from "./BaseFormComponent";

type Props = {};

export const UserForm: FC<Props> = () => {
  const { createUser, checkoutUrl, errors, loading } = useContainer();

  useEffect(() => {
    if (checkoutUrl) {
      location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  const handleSubmit = (data: FormState) => {
    createUser(data);
  };

  return (
    <section>
      <UserFormComponent loading={loading} errors={errors} onSubmit={handleSubmit} />
    </section>
  );
};
