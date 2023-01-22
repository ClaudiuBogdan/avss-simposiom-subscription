import { useCreateUser } from "@/adapters/api/users";

export const useContainer = () => {
  const {
    createUser,
    loading: createUserLoading,
    data: userData,
    errors: createUserErrors,
  } = useCreateUser();

  const loading = createUserLoading;
  const errors = createUserErrors;
  const checkoutUrl = userData?.checkout?.url;

  return {
    createUser,
    checkoutUrl,
    loading,
    errors,
  };
};
