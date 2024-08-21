import {
    BookmarkIcon,
    PlusIcon
  } from "@heroicons/react/24/outline";


export const ShopCard = () => {
  return (
    <div className="flex flex-col w-[20%]">
      <div className="relative">
        <img
          className="w-full"
          src="../gallery/prueba.jpeg"
          alt=""
        />
        <button className="absolute bottom-8 left-1/2 rounded-full bg-white bg-opacity-40 p-1">
            <PlusIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="font-light text-[11px]">KAFTÁN RAYAS LIMITED EDITION</p>
          <button className="">
            <BookmarkIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="font-light text-[11px]">PEN 519,00</p>
      </div>
    </div>
  );
};
