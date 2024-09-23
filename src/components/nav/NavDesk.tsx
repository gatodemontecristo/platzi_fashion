import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

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
        <ul className="list-none flex flex-row gap-6 font-light">
          <li>All</li>
          <li>Clothes</li>
          <li>Electronics</li>
          <li>Furnitures</li>
          <li>Toys</li>
          <li>Others</li>
        </ul>
      </div>
      <div className="flex flex-row gap-4 font-light text-sm items-start justify-center">
        <input
          className="font-thin border-slate-950 border-solid border-2 h-9 w-60 px-4 text-right m-5"
          placeholder="Search a product"
        ></input>
        <p>@platzi_fashion</p>
        <p>My Orders</p>
        <p>My Account</p>
        <button className="h-fit">Sign In</button>

        <button className="h-fi">
          <ShoppingCartIcon className="h-6 w-6 fill-curren" />
        </button>
      </div>
    </div>
  );
};
