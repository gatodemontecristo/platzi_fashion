import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { menuNavItems, menuNavItemsProps } from '../../ecomerce/utils';
import {
  useMyOrders,
  useNavBarStore,
  useShopCarStore,
  useShopFilterStore,
} from '../../stores';
import { ShopCarOrder } from '../../ecomerce/components';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import { BurgerButton } from './BurgerButton';
import { useNavOptions } from '../../hooks';
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
  const { orderList } = useMyOrders();
  const { goToMyOrders, goToShop, goToCheckout, cleanStoreage } =
    useNavOptions();

  return (
    <div
      id="myMenu"
      className={`overflow-x-hidden flex flex-col fixed top-0 left-0  w-full md:px-7 px-4 md:pt-7 pt-3 overflow-y-auto z-20 md:pb-7 pb-3 transition-colors duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className=" flex flex-row justify-between ">
        <div className="flex flex-col lg:w-1/3  w-1/2  lg:ms-24 md:ms-5 ms-0">
          <div className="relative w-full lg:h-28 h-20">
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
            <ul className="list-none md:flex hidden flex-row  gap-6 font-light text-lg	z-50 w-full lg:flex-nowrap md:flex-nowrap flex-wrap ">
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

        <div className="flex md:flex-row flex-col md:gap-4 gap-0 font-light text-sm items-start justify-center ">
          <input
            value={inputValue}
            className={`${location.pathname !== '/shop' && 'invisible'} font-thin md:ms-0 ms-5 border-slate-950 border-solid border-2 h-9 lg:w-60 md:w-48 w-34 px-4 text-right lg:m-5 md:m-3 m-1 md:order-1 order-3 `}
            placeholder="Search a product"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></input>

          <div className="lg:flex flex-row gap-4 hidden mt-5 order-2">
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
              <div className="relative ">
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
          </div>
          <div className="flex flex-row md:w-auto w-full gap-4 md:justify-normal justify-end  md:order-3 order-1">
            <BurgerButton></BurgerButton>
            <div className="relative mt-4">
              <button className="h-fi" onClick={toggleModal}>
                <ShoppingCartIcon className="md:h-8 md:w-8 h-6 w-6 fill-curren" />
              </button>
              {shopCardOrder.length > 0 && (
                <span className="absolute top-[-15px] right-[-15px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {shopCardOrder.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal que aparece debajo del botón */}
        <ShopCarOrder {...{ isModalOpen, toggleModal }}></ShopCarOrder>
      </div>
      <div className="md:hidden flex flex-row w-full mt-4">
        {location.pathname === '/shop' && (
          <ul className="list-none flex  flex-row  gap-4 font-light md:text-lg text-base leading-3	z-40 w-full md:flex-nowrap flex-wrap justify-center">
            {menuNavItems.map((item: menuNavItemsProps) => (
              <button
                key={nanoid()}
                className={`h-fi  ${categoryValue === item.category && 'font-bold underline underline-offset-4 '}`}
                onClick={() => handleCurrentCategory(item.category)}
              >
                {item.tittle}
              </button>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
