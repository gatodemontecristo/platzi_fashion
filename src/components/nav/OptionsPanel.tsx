import { useLocation } from 'react-router-dom';
import { useMyOrders } from '../../stores';
import { useNavOptions } from '../../hooks';
import { useEffect } from 'react';

interface OptionsPanelProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}
export const OptionsPanel = ({
  isModalOpen,
  toggleModal,
}: OptionsPanelProps) => {
  const location = useLocation();
  const { orderList } = useMyOrders();
  const { goToMyOrders, goToShop, goToCheckout, cleanStoreage } =
    useNavOptions();
  useEffect(() => {
    toggleModal();
  }, [location]);

  return (
    <div>
      <div
        className={`fixed right-0 top-16 w-1/3 h-full p-4 shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
          ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-4 justify-end text-end">
          <p>@platzi_fashion</p>
          {location.pathname !== '/orders' && (
            <div className="w-full">
              <button className="h-fi" onClick={goToMyOrders}>
                My Orders
              </button>
            </div>
          )}
          {location.pathname !== '/shop' && (
            <div className="w-full">
              <button className="h-fi" onClick={goToShop}>
                My Shop
              </button>
            </div>
          )}
          {location.pathname !== '/checkout' && (
            <div className="relative flex flex-row gap-1 justify-end">
              {orderList.length > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">
                  {orderList.length}
                </span>
              )}
              <button className="h-fi" onClick={goToCheckout}>
                Checkout
              </button>
            </div>
          )}
          <div className="w-full">
            <button className="h-fi" onClick={cleanStoreage}>
              Reset All
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
