import { stripe } from "./init";
import { CreateCustomerInput } from "./types";

export const createCustomer = async (input: CreateCustomerInput) => {
  return stripe.customers.create({
    email: input.email,
    name: input.fullName,
    metadata: {
      userId: input.userId,
    },
  });
};
