import { FC } from "react";
import { Selector } from "./Selector";
import { ChildFormProps } from "./types";

type Props = ChildFormProps;

export const NonMedicalForm: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <Selector
        label={"Ocupatie"}
        name={"nonMedicalType"}
        placeholder={"---- Selectati ocupatie ----"}
        options={[
          { value: "STUDENT", label: "Student" },
          { value: "OTHER", label: "Altele" },
        ]}
        value={state.occupation}
        onChange={(e) =>
          dispatch({ type: "occupationChanged", payload: e.target.value })
        }
        required={true}
        disabled={false}
      />
      {state.occupation === "STUDENT" && (
        <>
          <Selector
            label={"Facultate"}
            name={"faculty"}
            placeholder={"---- Selectati facultate ----"}
            options={[
              { value: "MG", label: "Medicina generala" },
              { value: "MD", label: "Medicina dentara" },
              { value: "AMG", label: "Asistenta medicala generala" },
              { value: "F", label: "Farmacie" },
              { value: "TD", label: "Tehnica dentara" },
              { value: "BFk", label: "Balneofiziokinetoterapie" },
              { value: "OTHER", label: "Altele" },
            ]}
            value={state.faculty}
            onChange={(e) =>
              dispatch({ type: "facultyChanged", payload: e.target.value })
            }
            required={true}
            disabled={false}
          />

          <Selector
            label={"An studiu"}
            name={"studyYear"}
            placeholder={"---- Selectati an studiu ----"}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
            ]}
            value={state.studyYear}
            onChange={(e) =>
              dispatch({ type: "studyYearChanged", payload: e.target.value })
            }
            required={true}
            disabled={false}
          />
        </>
      )}
    </>
  );
};
