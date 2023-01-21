import {
  DOCTOR_PRICE,
  NON_MEDICAL_PRICE,
  NURSE_PRICE,
  RESIDENT_DOCTOR_PRICE,
} from "@/adapters/stripe/resources/prices";

export const mapUserTypeToPriceId = (
  userType: string,
  doctorType: string
): string => {
  if (userType === "NON_MEDICAL") {
    return NON_MEDICAL_PRICE.id;
  }

  if (userType === "NURSE") {
    return NURSE_PRICE.id;
  }

  if (userType === "DOCTOR") {
    if (doctorType === "rezident") {
      return RESIDENT_DOCTOR_PRICE.id;
    }

    return DOCTOR_PRICE.id;
  }

  throw new Error("No price id found for user type");
};
