import { useState } from 'react';

export interface InputIconProps {
  placeholder: string;
  initalValue?: string;
  maxLength: number;
  tittle: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  children: React.ReactNode;
}
export const InputIcon = ({
  placeholder,
  initalValue = '',
  maxLength,
  tittle,
  handleChange,
  children,
}: InputIconProps) => {
  const [value, setvalue] = useState(initalValue);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500">{tittle}</p>
      <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:border-blue-500">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e, setvalue)}
          placeholder={placeholder}
          className="flex-grow outline-none px-2"
          maxLength={maxLength} // Limitar a 19 caracteres (16 dígitos + 3 espacios)
        />
        {children}
      </div>
    </div>
  );
};
