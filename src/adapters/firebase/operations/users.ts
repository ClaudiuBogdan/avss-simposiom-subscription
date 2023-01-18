import { UserPayment } from "@/dsl/payments/types";
import { User } from "@/dsl/users/types";
import { database } from "../init";

const userRef = "users";

export const insertUser = async (userDB: User) => {
  const { id: userId, ...data } = userDB;
  return database.ref(`${userRef}/${userId}`).set(data);
};

export const getUserById = async (userId: string) => {
  const snapshot = await database.ref(`${userRef}/${userId}`).once("value");
  if (snapshot.exists()) {
    return snapshot.val() as User;
  } else {
    return null;
  }
};

export const updateUserPayment = async (
  customerId: string,
  payment: UserPayment
) => {
  const snapshot = await database
    .ref(`${userRef}`)
    .orderByChild("customerId")
    .equalTo(customerId)
    .once("value");
  if (!snapshot.exists()) {
    throw new Error("User not found for customer id");
  }

  // Get first user
  const userId = Object.keys(snapshot.val())[0];
  const user: User = snapshot.val()[userId];
  user.id = userId;
  user.payment = payment;

  await database.ref(`${userRef}/${user.id}/payment`).set(payment);

  return user;
};
