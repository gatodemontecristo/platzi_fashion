export const priceFormat = (price: number) => {
  return 'PEN ' + price.toFixed(2);
};

export const handleInputCardChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  let value = e.target.value.replace(/\D/g, ''); // Elimina caracteres no numéricos

  if (value.length > 16) {
    value = value.slice(0, 16); // Limitar a 16 dígitos
  }

  // Agregar espacios cada 4 dígitos (formato de tarjeta de crédito)
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  setValue(value);
};

export const handleCvvChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  const value = e.target.value.replace(/\D/g, ''); // Solo permite números
  setValue(value.slice(0, 4)); // Limita a 4 dígitos como máximo
};

export const handleInputDateChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  let value = e.target.value.replace(/\D/g, ''); // Solo permitir números

  if (value.length > 4) {
    value = value.slice(0, 4); // Limitar la longitud a 4 caracteres (MMYY)
  }

  if (value.length >= 2) {
    value = `${value.slice(0, 2)}/${value.slice(2)}`; // Formatear como MM/YY
  }

  setValue(value);
};

export const handleValueChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  setValue(e.target.value);
};
