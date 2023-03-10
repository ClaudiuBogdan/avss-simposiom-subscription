import * as uuid from "uuid";
import { insertUser } from "@/adapters/firebase";
import { UserInput } from "./types";
import { createCustomer } from "@/adapters/stripe";

export const createUser = async (userInput: UserInput) => {
  const userId = uuid.v4();
  const { firstName, lastName, email } = userInput;

  const customer = await createCustomer({
    email,
    fullName: `${firstName} ${lastName}`,
    userId: userId,
  });

  const userData = {
    ...userInput,
    id: userId,
    customerId: customer.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertUser(userData);

  return userData;
};
