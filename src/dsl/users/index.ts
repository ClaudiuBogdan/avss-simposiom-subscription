import * as uuid from "uuid";
import { insertUser } from "@/adapters/firebase";
import { UserInput } from "./types";
import { createCustomer } from "@/adapters/stripe";

export const createUser = async (userInput: UserInput) => {
  const userId = uuid.v4();
  const { name, email, phone, userType } = userInput;

  const customer = await createCustomer({
    email,
    fullName: name,
    userId: userId,
  });

  const userData = {
    id: userId,
    name,
    email,
    phone,
    userType,
    customerId: customer.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertUser(userData);

  return userData;
};
