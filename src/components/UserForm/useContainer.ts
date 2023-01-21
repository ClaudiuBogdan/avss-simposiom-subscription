import { useEffect } from "react";
import { useCreateCheckoutSession } from "@/adapters/api/payments";
import { useCreateUser } from "@/adapters/api/users";

export const useContainer = () => {
  const {
    createUser,
    loading: createUserLoading,
    data: userData,
    errors: createUserErrors,
  } = useCreateUser();
  const {
    createCheckoutSession,
    data: checkoutUrl,
    loading: createCheckoutSessionLoading,
    errors: createCheckoutSessionErrors,
  } = useCreateCheckoutSession();

  const loading = createUserLoading || createCheckoutSessionLoading;
  const errors = createUserErrors || createCheckoutSessionErrors;

  useEffect(() => {
    if (userData) {
      createCheckoutSession({ userId: userData.id });
    }
  }, [userData, createCheckoutSession]);

  return {
    createUser,
    checkoutUrl,
    loading,
    errors,
  };
};
