import axios from "axios";
import useSWRMutation from "swr/mutation";

export type UserFormData = {
  name: string;
  email: string;
  phone: string;
};

export const useCreateUser = () => {
  const userUrl = "/api/users";
  const {
    data: mutationData,
    error: mutationError,
    trigger,
    isMutating,
  } = useSWRMutation(
    userUrl,
    (url, { arg }) =>
      axios
        .post(url, arg, {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        })
        .then((res) => res.data),
    {}
  );

  const createUser = async (data: UserFormData) => {
    trigger(data);
  };
  const error = mutationError || mutationData?.errors;
  const data = error ? null : mutationData;
  const loading = isMutating;
  return { createUser, data, loading, error };
};
