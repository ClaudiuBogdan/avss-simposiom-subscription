import { useEffect } from "react";
import { useCreateCheckoutSession } from "@/adapters/api/payments";
import { useCreateUser } from "@/adapters/api/users";

export const useContainer = () => {
  const {
    createUser,
    loading: createUserLoading,
    data: userData,
    error: createUserError,
  } = useCreateUser();
  const {
    createCheckoutSession,
    data: checkoutUrl,
    loading: createCheckoutSessionLoading,
    error: createCheckoutSessionError,
  } = useCreateCheckoutSession();

  const loading = createUserLoading || createCheckoutSessionLoading;
  const error = createUserError || createCheckoutSessionError;

  useEffect(() => {
    if (userData) {
      createCheckoutSession({ userId: userData.id });
    }
  }, [userData, createCheckoutSession]);

  return {
    createUser,
    checkoutUrl,
    loading,
    error,
  };
};
