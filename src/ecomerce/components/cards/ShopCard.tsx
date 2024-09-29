import { CardProps } from '../../types';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/outline';
interface ShopCardProps {
  card: CardProps;
  setCardSelected: (card: CardProps) => void;
}

export const ShopCard = ({ card, setCardSelected }: ShopCardProps) => {
  return (
    <div className="flex flex-col w-[20%]">
      <div className="relative">
        <a onClick={() => setCardSelected(card)}>
          <img
            className="w-full"
            src={card.image}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                '../default_image.png';
            }}
            alt=""
          />
        </a>
        <button className="absolute bottom-8 left-1/2 rounded-full bg-white bg-opacity-40 p-1 hover:bg-white ransition-all duration-300">
          <PlusIcon className="w-4 h-4  font-bold text-gray-200 hover:text-black" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="font-light text-[11px] uppercase">{card.title} </p>
          <button className="m-1">
            <BookmarkIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="font-light text-[11px]">PEN {card.price}</p>
      </div>
    </div>
  );
};
