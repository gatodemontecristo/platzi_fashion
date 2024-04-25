import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const NavDesk = () => {
  return (
    <div className="flex flex-row  justify-between w-full px-7 overflow-y-auto">
      <div></div>
      <div className="flex flex-col w-1/3">
        <div>
          <img src="platzi_logo.png" alt="" />
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
          placeholder="buscar"
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
