import { ref, set } from "firebase/database";
import { database } from "../init";

const userRef = "users";

type UserDB = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  clientId?: string;
};

export const insertUser = async (userDB: UserDB) => {
  const { id: userId, ...data } = userDB;
  return set(ref(database, `${userRef}/${userId}`), data);
};
