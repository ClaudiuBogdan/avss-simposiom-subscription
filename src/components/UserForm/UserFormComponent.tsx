import { FC, useState } from "react";
import { Input } from "./Input";
import { Submit } from "./Submit";
import { UserFormData, UserType } from "./types";
import { UserTypeSelector } from "./UserTypeSelector";

type Props = {
  onSubmit: (data: UserFormData) => void;
  disabled?: boolean;
};

export const UserFormComponent: FC<Props> = ({ onSubmit, disabled }) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [cnpValue, setCnpValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [userTypeValue, setUseTypeValue] = useState<UserType>("" as UserType);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFirstNameValue = event.target.value;
    setFirstNameValue(newFirstNameValue);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNameValue = event.target.value;
    setLastNameValue(newNameValue);
  };

  const handleCnpValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCnpValue = event.target.value;
    setCnpValue(newCnpValue);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = event.target.value;
    setEmailValue(newEmailValue);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneValue = event.target.value;
    setPhoneValue(newPhoneValue);
  };

  const handleUseTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUseTypeValue = event.target.value;
    setUseTypeValue(newUseTypeValue as UserType);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userTypeValue) return;

    onSubmit({
      name: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      userType: userTypeValue,
    });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <Input
        label={"Prenume"}
        name={"firstName"}
        type={"text"}
        placeholder={"Ex: Gabriela"}
        value={firstNameValue}
        onChange={handleFirstNameChange}
        required={true}
        disabled={false}
      />
      <Input
        label={"Nume"}
        name={"lastName"}
        type={"text"}
        placeholder={"Ex: Achim"}
        value={lastNameValue}
        onChange={handleLastNameChange}
        required={true}
        disabled={false}
      />

      <Input
        label={"CNP"}
        name={"cnp"}
        type={"text"}
        placeholder={"Cod Numeric Personal"}
        value={cnpValue}
        onChange={handleCnpValueChange}
        required={true}
        disabled={false}
      />

      <Input
        label={"Email"}
        name={"email"}
        type={"email"}
        placeholder={"Ex: gariela@gmail.com"}
        value={emailValue}
        onChange={handleEmailChange}
        required={true}
        disabled={false}
      />

      <Input
        label={"Telefon"}
        name={"phone"}
        type={"text"}
        placeholder={"Ex: 07xxxxxxxx"}
        value={phoneValue}
        onChange={handlePhoneChange}
        required={true}
        disabled={false}
      />
      <UserTypeSelector
        label={"Profesie"}
        name={"userType"}
        type={""}
        placeholder={"---- Selectati profesie ----"}
        value={userTypeValue}
        onChange={handleUseTypeChange}
        required={true}
        disabled={false}
      />
      <Submit label="Go to payment" disabled={disabled} />
    </form>
  );
};
