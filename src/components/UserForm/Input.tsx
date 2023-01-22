import { FC } from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  disabled: boolean;
  length?: number;
};

export const Input: FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  length,
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
          id={name}
          {...{
            type,
            placeholder,
            value,
            onChange,
            required,
            disabled,
            minLength: length,
            maxLength: length,
          }}
        />
      </div>
    </div>
  );
};
