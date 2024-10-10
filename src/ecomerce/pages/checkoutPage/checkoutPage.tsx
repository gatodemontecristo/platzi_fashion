import { useState } from 'react';
import {
  shopCardOrderItemProps,
  useNavBarStore,
  useShopCarStore,
} from '../../../stores';
import {
  BanknotesIcon,
  CreditCardIcon,
  CurrencyYenIcon,
  MapIcon,
  TicketIcon,
  TrashIcon,
  TruckIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { nanoid } from 'nanoid';
import { priceFormat } from '../../utils';

export const CheckoutPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const { shopCardOrder, removeItem } = useShopCarStore();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const { menuHeight } = useNavBarStore();

  const [expiryDate, setExpiryDate] = useState('');

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Solo permitir números

    if (value.length > 4) {
      value = value.slice(0, 4); // Limitar la longitud a 4 caracteres (MMYY)
    }

    if (value.length >= 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`; // Formatear como MM/YY
    }

    setExpiryDate(value);
  };

  const [cardNumber, setCardNumber] = useState('');

  const handleInputCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Elimina caracteres no numéricos

    if (value.length > 16) {
      value = value.slice(0, 16); // Limitar a 16 dígitos
    }

    // Agregar espacios cada 4 dígitos (formato de tarjeta de crédito)
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    setCardNumber(value);
  };

  const [cvv, setCvv] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo permite números
    setCvv(value.slice(0, 4)); // Limita a 4 dígitos como máximo
  };
  return (
    <div
      className="flex flex-row mx-[10%]  gap-8 mb-20 mt-10"
      style={{ paddingTop: `${menuHeight}px` }}
    >
      <div className="flex flex-col gap-8 w-[60%] p-4">
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
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:border-blue-500">
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
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Bruno Diaz"
              value="Erick Dejo"
              className="flex-grow outline-none px-2"
            />
            <UserIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Card number</p>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:border-blue-500">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleInputCardChange}
              placeholder="1234 5678 9012 3456"
              className="flex-grow outline-none px-2"
              maxLength={19} // Limitar a 19 caracteres (16 dígitos + 3 espacios)
            />
            <CreditCardIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col gap-2 w-auto">
            <p className="text-gray-500">Expiration</p>
            <input
              type="text"
              id="expiry"
              value={expiryDate}
              onChange={handleInputDateChange}
              placeholder="MM/YY"
              className="border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
              maxLength={5} // Limitar la entrada a 5 caracteres (MM/YY)
            />
          </div>
          <div className="flex flex-col gap-2 w-auto">
            <p className="text-gray-500">CVV</p>
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleChange}
              className="border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
              maxLength={4} // Máximo de 4 caracteres
              inputMode="numeric" // Muestra teclado numérico en móviles
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <button
            className="w-auto h-11 px-5 rounded-full text-black font-bold shadow-lg bg-white ease-in-out
    hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            Back
          </button>
          <button
            className="w-auto h-11 px-5 rounded-full text-white font-bold shadow-lg bg-blue-600 ease-in-out
    hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            Comfirm Payment $570.98
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[40%] py-4 pr-4 pl-8 border-l  border-gray-200 ">
        <p>Order Summary</p>
        <div className="flex flex-col ">
          {shopCardOrder.map((item: shopCardOrderItemProps) => (
            <div className="flex flex-row gap-4 items-center w-full">
              <p className="text-gray-500 w-[10%]">x{item.amount}</p>
              <p className="text-gray-700 w-[50%]">{item.title}</p>
              <p className="text-gray-700 w-[30%]">{priceFormat(item.price)}</p>
              <button
                className="rounded-md bg-white hover:bg-black hover:text-white p-2 transition-all duration-300 "
                onClick={() => removeItem(item.id)}
              >
                <TrashIcon className="h-5  w-5 fill-curren"></TrashIcon>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full"></div>
        <div className="flex flex-row  items-center w-full justify-between">
          <p className="text-gray-700">Delivery</p>
          <p className="text-gray-700">{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row  items-center w-full justify-between">
          <p className="text-gray-700">Discount</p>
          <p className="text-gray-700">{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full"></div>
        <div className="flex flex-row  items-center w-full justify-between">
          <p className="text-gray-700">Total (exc tax)</p>
          <p className="text-gray-700">{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row  items-center w-full justify-between">
          <p className="text-gray-700">Tax</p>
          <p className="text-gray-700">{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full"></div>
        <div className="flex flex-row  items-center w-full justify-between">
          <p className="text-gray-700 font-bold">Order Total</p>
          <p className="text-gray-700 font-bold">{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full"></div>
        <div
          className="flex flex-row w-full justify-between bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
          role="alert"
        >
          <p>Your total saving on this order</p>
          <p>{priceFormat(450)}</p>
        </div>
        <div className="flex flex-row  items-center w-full justify-between gap-4">
          <div className="flex items-center w-[60%] border border-gray-300 rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Coupon code"
              className="flex-grow outline-none px-2"
            />
            <TicketIcon className="h-5 w-5 text-gray-500" />
          </div>
          <button
            className=" w-[40%] h-10 px-5 rounded-full text-black font-bold shadow-lg bg-white ease-in-out
    hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
