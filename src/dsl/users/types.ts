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
