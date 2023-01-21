export type UserType = "NON_MEDICAL" | "NURSE" | "DOCTOR";

export type ChildFormProps = {
  state: FormState
  dispatch: (action: FormAction) => void
};

export type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  cnp: string
  userType: UserType | ""
  occupation: string
  faculty: string
  studyYear: string
  nurseId: string
  workingPlace: string
  county: string
  doctorType: string
  cuim: string
  specialty: string
}

export type FormAction = {
  type: 'firstNameChanged'
  payload: string
} | {
  type: 'lastNameChanged'
  payload: string
} | {
  type: 'emailChanged'
  payload: string
} | {
  type: 'phoneChanged'
  payload: string
} | {
  type: 'cnpChanged'
  payload: string
} | {
  type: 'userTypeChanged'
  payload: UserType
} | {
  type: 'occupationChanged'
  payload: string
} | {
  type: 'facultyChanged'
  payload: string
} | {
  type: 'studyYearChanged'
  payload: string
} | {
  type: 'nurseIdChanged'
  payload: string
} | {
  type: 'workingPlaceChanged'
  payload: string
} | {
  type: 'countyChanged'
  payload: string
} | {
  type: 'doctorTypeChanged'
  payload: string
} | {
  type: 'cuimChanged'
  payload: string
} | {
  type: 'specialtyChanged'
  payload: string
}