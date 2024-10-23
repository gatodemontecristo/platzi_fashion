import { TicketIcon } from '@heroicons/react/24/solid';
import {
  shopCardOrderItemProps,
  useEcomerceStore,
  useShopCarStore,
} from '../../../stores';
import { ItemOrderSummary } from '../cards';
import { ItemForm } from '../../../components';
import { Notyf } from 'notyf';
import { priceFormat } from '../../utils';

interface OrderSummaryProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}
export const OrderSummary = ({
  isModalOpen,
  toggleModal,
}: OrderSummaryProps) => {
  const { shopCardOrder, removeItem } = useShopCarStore();
  const { totalResult } = useEcomerceStore();
  const notyf = new Notyf();
  return (
    <div>
      <div
        className={`fixed right-0 top-16  w-1/2 h-full p-4 shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
        ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-4 w-fullpy-4 pr-4 pl-8 border-l  border-gray-200 ">
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
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal} // Cerrar el modal al hacer clic fuera
        ></div>
      )}
    </div>
  );
};
