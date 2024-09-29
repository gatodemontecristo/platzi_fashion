import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { menuNavItems, menuNavItemsProps } from '../../ecomerce/utils';
import { useShopFilterStore } from '../../stores';

export const NavDesk = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      className={`flex flex-row fixed top-0 left-0 justify-between w-full px-7 pt-7 overflow-y-auto z-20 pb-7 transition-colors duration-300 ${
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
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src="platzi_logo.png"
            alt=""
            className={`absolute inset-0 w-full h-full  transition-opacity duration-500 ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
        <ul className="list-none flex flex-row gap-6 font-light text-lg		">
          {menuNavItems.map((item: menuNavItemsProps) => (
            <button
              className={`h-fi ${categoryValue === item.category && 'font-bold underline underline-offset-4'}`}
              onClick={() => handleCurrentCategory(item.category)}
            >
              {item.tittle}
            </button>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-4 font-light text-sm items-start justify-center">
        <input
          value={inputValue}
          className="font-thin border-slate-950 border-solid border-2 h-9 w-60 px-4 text-right m-5"
          placeholder="Search a product"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>
        <p>@platzi_fashion</p>
        <p>My Orders</p>
        <p>My Account</p>
        <button className="h-fit">Sign In</button>

        <button className="h-fi" onClick={toggleModal}>
          <ShoppingCartIcon className="h-6 w-6 fill-curren" />
        </button>
      </div>

      {/* Modal que aparece debajo del botón */}

      <div>
        <div
          className={`fixed right-0 top-16 w-1/4 h-full shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
          ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold">Carrito</h3>
            <p>No hay artículos en el carrito.</p>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Ir al checkout
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleModal} // Cerrar el modal al hacer clic fuera
          ></div>
        )}
      </div>
    </div>
  );
};
