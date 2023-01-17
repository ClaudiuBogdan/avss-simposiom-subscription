import * as uuid from "uuid";
import { insertUser } from "@/adapters/firebase";
import { UserInput } from "./types";

export const createUser = async (userInput: UserInput) => {
  const userData = {
    ...userInput,
    id: uuid.v4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await insertUser(userData);

  return userData;
};
