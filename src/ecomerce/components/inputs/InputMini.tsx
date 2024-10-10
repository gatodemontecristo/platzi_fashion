import { useState } from 'react';

export interface InputMiniProps {
  placeholder: string;
  maxLength: number;
  tittle: string;
  inputMode?:
    | 'text'
    | 'search'
    | 'email'
    | 'tel'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
}
export const InputMini = ({
  placeholder,
  maxLength,
  tittle,
  inputMode = 'text',
  handleChange,
}: InputMiniProps) => {
  const [value, setvalue] = useState('');
  return (
    <div className="flex flex-col gap-2 w-auto">
      <p className="text-gray-500">{tittle}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e, setvalue)}
        className="border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
        maxLength={maxLength} // Máximo de 4 caracteres
        inputMode={inputMode} // Muestra teclado numérico en móviles
      />
    </div>
  );
};
