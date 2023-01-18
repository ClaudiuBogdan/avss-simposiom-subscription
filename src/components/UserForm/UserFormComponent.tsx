import { FC, useState } from "react";
import { UserFormData, UserType } from "./types";

type Props = {
  onSubmit: (data: UserFormData) => void;
  disabled?: boolean;
};

export const UserFormComponent: FC<Props> = ({ onSubmit, disabled }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [useTypeValue, setUseTypeValue] = useState<UserType>("" as UserType);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNameValue = event.target.value;
    setNameValue(newNameValue);
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
    if (!useTypeValue) return;

    onSubmit({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      userType: useTypeValue,
    });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Jane Doe"
            value={nameValue}
            onChange={handleNameChange}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="email"
            placeholder="email@email.com"
            value={emailValue}
            onChange={handleEmailChange}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-phone"
          >
            Phone
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-phone"
            type="text"
            placeholder="07xxxxxxxx"
            value={phoneValue}
            onChange={handlePhoneChange}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-user-type"
          >
            Role
          </label>
        </div>
        <div className="md:w-2/3 relative">
          <select
            id="inline-user-type"
            value={useTypeValue}
            onChange={handleUseTypeChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled value={""}>
              {" "}
              -- select an option --{" "}
            </option>
            <option value={"NON_MEDICAL"}>Non-medical</option>
            <option value={"NURSE"}>Asistenți medicali</option>
            <option value={"RESIDENT_DOCTOR"}>Medici rezidenți</option>
            <option value={"DOCTOR"}>Medici primari /specialisti</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={disabled}
          >
            Go to payment
          </button>
        </div>
      </div>
    </form>
  );
};
