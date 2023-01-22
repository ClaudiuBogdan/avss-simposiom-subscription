import { FC } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
};

export const GDPRAgreement: FC<Props> = ({ onChange, value }) => (
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input
        required
        className="mr-2 leading-tight"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className="text-sm">
        Sunt de acord cu Politica de confidențialitate și cu Termenii și
        condițiile
      </span>
    </label>
  </div>
);
