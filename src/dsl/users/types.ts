import { UserPayment } from "../payments/types";

export type UserInput = {
  name: string;
  email: string;
  phone: string;
  userType: UserType;
};

export enum UserType {
  NON_MEDICAL = "NON_MEDICAL",
  NURSE = "NURSE",
  RESIDENT_DOCTOR = "RESIDENT_DOCTOR",
  DOCTOR = "DOCTOR",
}

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;
  payment?: UserPayment;
};
