import axios from "axios";
import useSWRMutation from "swr/mutation";

// https://swr.vercel.app/docs/mutation#useswrmutation

export type UserFormData = {
  [key: string]: string | number | boolean;
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

  const errors =
    (mutationError && [mutationError.message]) || mutationData?.errors;
  const data = errors ? null : mutationData;
  const loading = isMutating;

  return { createUser, data, loading, errors };
};
