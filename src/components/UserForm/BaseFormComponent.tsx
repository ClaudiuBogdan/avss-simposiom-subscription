import { FC, useReducer, useState } from "react";
import { DoctorForm } from "./DoctorForm";
import { Input } from "./Input";
import { NonMedicalForm } from "./NonMedicalForm";
import { NurseForm } from "./NurseForm";
import { Submit } from "./Submit";
import { FormState, UserType } from "./types";
import { Selector } from "./Selector";
import { initialState, reducer } from "./store";
import { Errors } from "./Errors";

type Props = {
  onSubmit: (data: FormState) => void;
  errors: string[];
  loading?: boolean;
};

export const UserFormComponent: FC<Props> = ({ onSubmit, loading, errors }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(state);
  };

  return (
    <form className="w-full max-w-xl" onSubmit={handleSubmit}>
      <Input
        label={"Prenume"}
        name={"firstName"}
        type={"text"}
        placeholder={"Ex: Gabriela"}
        value={state.firstName}
        onChange={(e) =>
          dispatch({ type: "firstNameChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />
      <Input
        label={"Nume"}
        name={"lastName"}
        type={"text"}
        placeholder={"Ex: Achim"}
        value={state.lastName}
        onChange={(e) =>
          dispatch({ type: "lastNameChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"CNP"}
        name={"cnp"}
        type={"number"}
        placeholder={"Cod Numeric Personal"}
        value={state.cnp}
        onChange={(e) =>
          dispatch({ type: "cnpChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Email"}
        name={"email"}
        type={"email"}
        placeholder={"Ex: gabriela@gmail.com"}
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "emailChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Telefon"}
        name={"phone"}
        type={"tel"}
        placeholder={"Ex: 07xxxxxxxx"}
        value={state.phone}
        onChange={(e) =>
          dispatch({ type: "phoneChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Selector
        label={"Categorie"}
        name={"userType"}
        placeholder={"---- Selectati categorie ----"}
        options={[
          { value: "NON_MEDICAL", label: "Non-medical" },
          { value: "NURSE", label: "Asistent medical" },
          { value: "DOCTOR", label: "Medic" },
        ]}
        value={state.userType}
        onChange={(e) =>
          dispatch({
            type: "userTypeChanged",
            payload: e.target.value as UserType,
          })
        }
        required={true}
        disabled={false}
      />

      {state.userType === "NON_MEDICAL" && (
        <NonMedicalForm {...{ state, dispatch }} />
      )}
      {state.userType === "NURSE" && <NurseForm {...{ state, dispatch }} />}
      {state.userType === "DOCTOR" && <DoctorForm {...{ state, dispatch }} />}

      {errors && <Errors errors={errors} />}

      <Submit
        label="Go to payment"
        loadingText="Redirecting"
        loading={loading}
      />
    </form>
  );
};
