import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { menuNavItems, menuNavItemsProps } from '../../ecomerce/utils';
import {
  clearStore,
  useMyOrders,
  useNavBarStore,
  useShopCarStore,
  useShopFilterStore,
} from '../../stores';
import { ShopCarOrder } from '../../ecomerce/components';
import { nanoid } from 'nanoid';
import { useLocation, useNavigate } from 'react-router-dom';
import { Notyf } from 'notyf';
export const NavDesk = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setMenuHeight } = useNavBarStore();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuElement = document.getElementById('myMenu');
    const updateMenuHeight = () => {
      if (menuElement) {
        setMenuHeight(menuElement.offsetHeight);
      }
    };
    updateMenuHeight();
    window.addEventListener('resize', updateMenuHeight);

    return () => {
      window.removeEventListener('resize', updateMenuHeight);
    };
  }, []);

  const {
    categoryValue,
    setCategoryValue,
    setCurrentPage,
    getListItems,
    inputValue,
    setInputValue,
  } = useShopFilterStore();
  const handleCurrentCategory = (category: number) => {
    setCurrentPage(1);
    setCategoryValue(category);
  };

  useEffect(() => {
    getListItems();
  }, [categoryValue]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getListItems();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { shopCardOrder } = useShopCarStore();

  const location = useLocation();

  const navigate = useNavigate();
  const goToShop = () => {
    navigate('/shop');
  };
  const goToCheckout = () => {
    navigate('/checkout');
  };
  const goToMyOrders = () => {
    navigate('/orders');
  };
  const notyf = new Notyf();
  const cleanStoreage = () => {
    notyf.success('All data has been deleted.');
    clearStore();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const { orderList } = useMyOrders();

  return (
    <div
      id="myMenu"
      className={`overflow-x-hidden flex flex-row fixed top-0 left-0 justify-between w-full px-7 pt-7 overflow-y-auto z-20 pb-7 transition-colors duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div></div>
      <div className="flex flex-col w-1/3">
        <div className="relative w-full h-28">
          <img
            src="platzi_logo2.png"
            alt=""
            className={`absolute inset-0 w-full h-full  transition-opacity duration-500 ${
              isScrolled || location.pathname !== '/shop'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
          <img
            src="platzi_logo.png"
            alt=""
            className={`absolute inset-0 w-full h-full  transition-opacity duration-500 ${
              isScrolled || location.pathname !== '/shop'
                ? 'opacity-0'
                : 'opacity-100'
            }`}
          />
        </div>
        {location.pathname === '/shop' && (
          <ul className="list-none flex flex-row gap-6 font-light text-lg		">
            {menuNavItems.map((item: menuNavItemsProps) => (
              <button
                key={nanoid()}
                className={`h-fi ${categoryValue === item.category && 'font-bold underline underline-offset-4'}`}
                onClick={() => handleCurrentCategory(item.category)}
              >
                {item.tittle}
              </button>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row gap-4 font-light text-sm items-start justify-center">
        <input
          value={inputValue}
          className={`${location.pathname !== '/shop' && 'invisible'} font-thin border-slate-950 border-solid border-2 h-9 w-60 px-4 text-right m-5`}
          placeholder="Search a product"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>
        <p>@platzi_fashion</p>
        {location.pathname !== '/orders' && (
          <button className="h-fi" onClick={goToMyOrders}>
            My Orders
          </button>
        )}
        {location.pathname !== '/shop' && (
          <button className="h-fi" onClick={goToShop}>
            My Shop
          </button>
        )}
        {location.pathname !== '/checkout' && (
          <div className="relative">
            <button className="h-fi" onClick={goToCheckout}>
              Checkout
            </button>
            {orderList.length > 0 && (
              <span className="absolute top-[-15px] right-[-15px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">
                {orderList.length}
              </span>
            )}
          </div>
        )}

        <button className="h-fi" onClick={cleanStoreage}>
          Reset All
        </button>
        <div className="relative">
          <button className="h-fi" onClick={toggleModal}>
            <ShoppingCartIcon className="h-6 w-6 fill-curren" />
          </button>
          {shopCardOrder.length > 0 && (
            <span className="absolute top-[-15px] right-[-15px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              {shopCardOrder.length}
            </span>
          )}
        </div>
      </div>

      {/* Modal que aparece debajo del botón */}
      <ShopCarOrder {...{ isModalOpen, toggleModal }}></ShopCarOrder>
    </div>
  );
};
