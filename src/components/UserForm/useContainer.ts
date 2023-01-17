import { useCreateUser } from "@/adapters/api/users";

export const useContainer = () => {
  const { createUser, loading, data, error } = useCreateUser();

  return {
    createUser,
    loading,
    data,
    error,
  };
};
