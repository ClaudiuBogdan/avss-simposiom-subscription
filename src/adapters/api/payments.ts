import axios from "axios";
import { useCallback } from "react";
import useSWRMutation from "swr/mutation";

export type CheckoutSessionInput = {
  userId: string;
};

export const useCreateCheckoutSession = () => {
  const userUrl = "/api/payments/checkout";
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

  const createCheckoutSession = useCallback(
    async (data: CheckoutSessionInput) => {
      trigger(data);
    },
    [trigger]
  );

  const errors =
    (mutationError && [mutationError.message]) || mutationData?.errors;
  const data = errors ? null : mutationData;
  const loading = isMutating;

  return { createCheckoutSession, data, loading, errors };
};
