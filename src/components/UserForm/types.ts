export type UserFormData = {
  name: string;
  email: string;
  phone: string;
  userType: UserType;
};

export type UserType = "NON_MEDICAL" | "NURSE" | "RESIDENT_DOCTOR" | "DOCTOR";
