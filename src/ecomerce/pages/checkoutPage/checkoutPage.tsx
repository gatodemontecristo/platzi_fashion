import { useState } from 'react';
import { useNavBarStore } from '../../../stores';
import {
  BanknotesIcon,
  CreditCardIcon,
  CurrencyYenIcon,
  MapIcon,
  TruckIcon,
} from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { nanoid } from 'nanoid';

export const CheckoutPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const { menuHeight } = useNavBarStore();
  return (
    <div className="flex flex-row " style={{ paddingTop: `${menuHeight}px` }}>
      <div className="flex flex-col gap-8 mx-[10%]">
        <div className="flex flex-col items-start gap-2">
          <label
            className={`flex items-center p-4 w-full cursor-pointer rounded-lg ${
              selectedOption === 'option1'
                ? 'border-2 border-blue-500 bg-blue-100'
                : 'border border-gray-300'
            }`}
          >
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="flex flex-row ml-2 text-gray-700 justify-center">
              <TruckIcon className="w-6 mr-2"></TruckIcon>Get it delivered in
              only 30 minutos
            </span>
          </label>

          <label
            className={`flex items-center p-4 w-full  cursor-pointer rounded-lg ${
              selectedOption === 'option2'
                ? 'border-2 border-blue-500 bg-blue-100'
                : 'border border-gray-300'
            }`}
          >
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="flex flex-row ml-2 text-gray-700">
              <ShoppingBagIcon className="w-6 mr-2"></ShoppingBagIcon>Pickup
              available in 3 stores near you
            </span>
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Shipping address</p>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="text"
              placeholder="Location"
              value="P. Sherman 42 Wallaby Way, Sydney"
              className="flex-grow outline-none px-2"
            />
            <MapIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black font-bold text-[20px]">
            Payment information
          </p>
          <div className="flex flex-row gap-3">
            {[0, 1, 2].map((index) => (
              <button
                key={nanoid()}
                onClick={() => handleButtonClick(index)}
                className={`px-6 py-6 border rounded-lg transition-colors duration-300 ${
                  selectedButton === index
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {index === 0 && (
                  <CreditCardIcon className="w-6"></CreditCardIcon>
                )}
                {index === 1 && <BanknotesIcon className="w-6"></BanknotesIcon>}
                {index === 2 && (
                  <CurrencyYenIcon className="w-6"></CurrencyYenIcon>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Name on card</p>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="text"
              placeholder="Bruno Diaz"
              value="Erick Dejo"
              className="flex-grow outline-none px-2"
            />
            <CreditCardIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
