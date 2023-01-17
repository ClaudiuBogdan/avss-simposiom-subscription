import { database } from "../init";

const userRef = "users";

type UserDB = {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;
};

export const insertUser = async (userDB: UserDB) => {
  const { id: userId, ...data } = userDB;
  return database.ref(`${userRef}/${userId}`).set(data);
};

export const getUserById = async (userId: string) => {
  const snapshot = await database.ref(`${userRef}/${userId}`).once("value");
  if (snapshot.exists()) {
    return snapshot.val() as UserDB;
  } else {
    return null;
  }
};
