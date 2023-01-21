import { ChangeEvent, FC, useState } from "react";
import { Input } from "./Input";
import { Selector } from "./Selector";
import { ChildFormProps } from "./types";

type Props = ChildFormProps;

export const DoctorForm: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <Selector
        label={"Medic"}
        name={"doctorType"}
        placeholder={"---- Selectati categorie ----"}
        options={[
          { value: "rezident", label: "Rezident" },
          { value: "primar", label: "Primar" },
          { value: "specialist", label: "Specialist" },
        ]}
        value={state.doctorType}
        onChange={(e) =>
          dispatch({ type: "doctorTypeChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"CUIM"}
        name={"cuim"}
        type={"text"}
        length={10}
        placeholder={"Ex: 1234567890"}
        value={state.cuim}
        onChange={(e) =>
          dispatch({ type: "cuimChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Loc de munca"}
        name={"workingPlace"}
        type={"string"}
        placeholder={"Ex: Spitalul de Urgenta"}
        value={state.workingPlace}
        onChange={(e) =>
          dispatch({ type: "workingPlaceChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Specialitate"}
        name={"speciality"}
        type={"string"}
        placeholder={"Ex: Medic de familie"}
        value={state.specialty}
        onChange={(e) =>
          dispatch({ type: "specialtyChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Judet"}
        name={"county"}
        type={"string"}
        placeholder={"Ex: Sibiu"}
        value={state.county}
        onChange={(e) =>
          dispatch({ type: "countyChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Verificati CUIM</p>
        <p>
          Este foarte important sa completati CUIM in mod corect pentru ca
          astfel punctele EMC obtinute de Dumneavoastra in cadrul acestei
          conferinte sa fi recunoscute de CMR.
        </p>
      </div>
    </>
  );
};
