import { FormAction, FormState } from "./types";

export const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  cnp: "",
  userType: "",
  occupation: "",
  faculty: "",
  studyYear: "",
  nurseId: "",
  workingPlace: "",
  county: "",
  doctorType: "",
  cuim: "",
  specialty: "",
  gdprAgreement: false,
};

export const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "firstNameChanged":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastNameChanged":
      return {
        ...state,
        lastName: action.payload,
      };
    case "emailChanged":
      return {
        ...state,
        email: action.payload,
      };
    case "phoneChanged":
      return {
        ...state,
        phone: action.payload,
      };
    case "cnpChanged":
      return {
        ...state,
        cnp: action.payload,
      };
    case "userTypeChanged":
      return {
        ...state,
        userType: action.payload,
      };
    case "occupationChanged":
      return {
        ...state,
        occupation: action.payload,
      };
    case "facultyChanged":
      return {
        ...state,
        faculty: action.payload,
      };
    case "studyYearChanged":
      return {
        ...state,
        studyYear: action.payload,
      };
    case "nurseIdChanged":
      return {
        ...state,
        nurseId: action.payload,
      };
    case "workingPlaceChanged":
      return {
        ...state,
        workingPlace: action.payload,
      };
    case "countyChanged":
      return {
        ...state,
        county: action.payload,
      };
    case "doctorTypeChanged":
      return {
        ...state,
        doctorType: action.payload,
      };
    case "cuimChanged":
      return {
        ...state,
        cuim: action.payload,
      };
    case "specialtyChanged":
      return {
        ...state,
        specialty: action.payload,
      };
    case "gdprAgreementChanged":
        return {
            ...state,
            gdprAgreement: action.payload,
        }
    default:
      throw new Error("Invalid action type");
  }
};
