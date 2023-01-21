import { ChangeEvent, FC, useState } from "react";
import { Input } from "./Input";
import { ChildFormProps } from "./types";

type Props = ChildFormProps;

export const NurseForm: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <Input
        label={"OAMGMAMR"}
        name={"OAMGMAMR"}
        type={"text"}
        placeholder={"SBXXXXXX"}
        value={state.nurseId}
        onChange={(e) =>
          dispatch({ type: "nurseIdChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Loc de munca"}
        name={"workingPlace"}
        type={"text"}
        placeholder={"Ex: Spitalul de Urgenta"}
        value={state.workingPlace}
        onChange={(e) =>
          dispatch({ type: "workingPlaceChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />

      <Input
        label={"Judet"}
        name={"county"}
        type={"text"}
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
        <p className="font-bold">Verificati OAMGMAMR</p>
        <p>
          Este foarte important sa completati numar certificat membru OAMGMAMR
          in mod corect pentru ca astfel punctele EMC obtinute de Dumneavoastra
          in cadrul acestei conferinte sa fi recunoscute de OAMGMAMR.
        </p>
      </div>
    </>
  );
};
