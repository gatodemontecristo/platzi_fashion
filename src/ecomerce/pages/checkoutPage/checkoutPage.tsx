import { useEffect, useState } from 'react';
import {
  shopCardOrderItemProps,
  useEcomerceStore,
  useMyOrders,
  useNavBarStore,
  useShopCarStore,
} from '../../../stores';
import {
  BanknotesIcon,
  CreditCardIcon,
  CurrencyYenIcon,
  MapIcon,
  TicketIcon,
  TruckIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { nanoid } from 'nanoid';
import {
  getFormattedDate,
  handleCvvChange,
  handleInputCardChange,
  handleInputDateChange,
  handleValueChange,
  priceFormat,
} from '../../utils';
import { InputIcon, InputMini, ItemOrderSummary } from '../../components';
import { Notyf } from 'notyf';
import { useNavigate } from 'react-router-dom';
import { ItemForm } from '../../../components';

export const CheckoutPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const { shopCardOrder, removeItem, cleanItems } = useShopCarStore();
  const { totalResult, setTotalResult } = useEcomerceStore();
  const navigate = useNavigate();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const { menuHeight } = useNavBarStore();
  useEffect(() => {
    setTotalResult(shopCardOrder, selectedOption, selectedButton);
  }, [shopCardOrder, selectedOption, selectedButton]);
  const notyf = new Notyf();

  const { addOrderList } = useMyOrders();

  const createOrderFn = () => {
    addOrderList({
      id: nanoid(),
      date: getFormattedDate(),
      articles: shopCardOrder.length,
      total: totalResult.order,
      shopOrderCollection: shopCardOrder,
    });
    cleanItems();
    navigate('/orders');
    notyf.success('Purchase order has been generated.');
  };

  return (
    <div
      className="flex flex-row mx-[10%]  gap-8 mb-20 "
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
        <InputIcon
          placeholder="Location"
          initalValue="P. Sherman 42 Wallaby Way, Sydney"
          maxLength={250}
          tittle="Shipping address"
          handleChange={handleValueChange}
        >
          <MapIcon className="h-5 w-5 text-gray-500" />
        </InputIcon>

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
        <InputIcon
          placeholder="Bruno Diaz"
          initalValue="Erick Dejo"
          maxLength={250}
          tittle="Name on card"
          handleChange={handleValueChange}
        >
          <UserIcon className="h-5 w-5 text-gray-500" />
        </InputIcon>

        <InputIcon
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          tittle="Card number"
          handleChange={handleInputCardChange}
        >
          <CreditCardIcon className="h-5 w-5 text-gray-500" />
        </InputIcon>
        <div className="flex flex-row w-full gap-4">
          <InputMini
            placeholder="MM/YY"
            maxLength={5}
            tittle="Expiration"
            handleChange={handleInputDateChange}
          ></InputMini>
          <InputMini
            placeholder="CVV"
            maxLength={4}
            tittle="CVV"
            inputMode="numeric"
            handleChange={handleCvvChange}
          ></InputMini>
        </div>
        <div className="flex flex-row w-full gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-auto h-11 px-5 rounded-full text-black font-bold shadow-lg bg-white ease-in-out
    hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            Back
          </button>
          <button
            onClick={createOrderFn}
            disabled={shopCardOrder.length === 0 ? true : false}
            className="w-auto h-11 px-5 rounded-full text-white font-bold shadow-lg bg-blue-600 ease-in-out
    hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300
    disabled:bg-gray-400 disabled:text-white  disabled:cursor-not-allowed disabled:transform-none"
          >
            {`Comfirm Payment ${priceFormat(totalResult.order)}`}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[40%] py-4 pr-4 pl-8 border-l  border-gray-200 ">
        <p>Order Summary</p>
        {shopCardOrder.length === 0 ? (
          <p className="text-center italic font-light my-3">
            Ups! There are no items to checkout.
          </p>
        ) : (
          <div className="flex flex-col ">
            {shopCardOrder.map((item: shopCardOrderItemProps, index) => (
              <ItemOrderSummary
                key={index}
                {...{ removeItem, item, notyf }}
              ></ItemOrderSummary>
            ))}
          </div>
        )}

        <ItemForm amount={totalResult.delivery} title="Delivery"></ItemForm>
        <ItemForm
          amount={totalResult.discount}
          title="Discount"
          withLine={false}
        ></ItemForm>
        <ItemForm
          amount={totalResult.totalexc}
          title="Total (exc tax)"
        ></ItemForm>
        <ItemForm
          amount={totalResult.tax}
          title="Tax"
          withLine={false}
        ></ItemForm>
        <ItemForm
          amount={totalResult.order}
          title="Order Total"
          withBold={true}
        ></ItemForm>

        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full"></div>
        <div
          className="flex flex-row w-full justify-between bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
          role="alert"
        >
          <p>Your total saving on this order</p>
          <p>{priceFormat(totalResult.saving)}</p>
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
