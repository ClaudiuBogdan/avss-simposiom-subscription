import { UserPayment } from "../payments/types";

export type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: UserType;
  occupation: string;
  faculty: string;
  studyYear: string;
  nurseId: string;
  workingPlace: string;
  county: string;
  doctorType: string;
  cuim: string;
  specialty: string;
};

export enum UserType {
  NON_MEDICAL = "NON_MEDICAL",
  NURSE = "NURSE",
  DOCTOR = "DOCTOR",
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  occupation: string;
  faculty: string;
  studyYear: string;
  nurseId: string;
  workingPlace: string;
  county: string;
  doctorType: string;
  cuim: string;
  specialty: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;
  payment?: UserPayment;
};
