import { useNavigate } from 'react-router-dom';
import { shopCardOrderItemProps, useShopCarStore } from '../../../stores';
import { ItemShopCar } from '../cards';
import { Notyf } from 'notyf';

interface ShopCarOrderProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const ShopCarOrder = ({
  isModalOpen,
  toggleModal,
}: ShopCarOrderProps) => {
  const { shopCardOrder, updateItem, removeItem } = useShopCarStore();
  const onUpdateAmount = (item: shopCardOrderItemProps, type: '+' | '-') => {
    const newAmount = type === '+' ? item.amount + 1 : item.amount - 1;
    if (newAmount >= 1) {
      updateItem(newAmount, item.id);
    }
  };
  const notyf = new Notyf();
  const onRemoveFunction = (id: number) => {
    removeItem(id);
    notyf.error('The product has been removed from the shopping cart.');
  };
  const navigate = useNavigate();

  const goToCheckout = () => {
    toggleModal();
    navigate('/checkout');
  };
  return (
    <div>
      <div
        className={`fixed right-0 top-16 lg:w-1/4 md:w-1/2 w-4/6 h-full md:p-4 p-2 shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
          ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col h-3/4">
            <p className="font-light md:text-[18px] text-[14px]  mb-3 ">
              MY ORDERS
            </p>

            {shopCardOrder.length === 0 ? (
              <div className="flex flex-col items-center gap-2">
                <img className="w-1/2" src="../gallery/meme.png" alt="" />
                <p className="font-light text-[16px]  mb-3 italic">
                  Ups! There are no items in the cart.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 overflow-y-scroll overflow-x-hidden">
                {shopCardOrder.map((item: shopCardOrderItemProps, index) => (
                  <ItemShopCar
                    key={index}
                    onRemoveFunction={onRemoveFunction}
                    {...{ item, onUpdateAmount }}
                  ></ItemShopCar>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-row justify-end p-4 border-t border-gray-200 h-1/4">
            <button
              className="md:w-2/4 w-4/5 h-11 rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
    hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300
     disabled:bg-gray-400 disabled:text-white  disabled:cursor-not-allowed disabled:transform-none"
              disabled={shopCardOrder.length === 0 ? true : false}
              onClick={goToCheckout}
            >
              Go to checkout
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
