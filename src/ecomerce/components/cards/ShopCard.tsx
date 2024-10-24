import { CardProps } from '../../types';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import { priceFormat } from '../../utils';
interface ShopCardProps {
  card: CardProps;
  setCardSelected: (card: CardProps) => void;
  addItem: (product: CardProps) => void;
}

export const ShopCard = ({ card, setCardSelected, addItem }: ShopCardProps) => {
  return (
    <div className="flex flex-col md:w-[20%] w-[30%] animate__animated animate__fadeInUp">
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
        <button
          className="absolute bottom-4 left-1/2 rounded-full bg-white bg-opacity-40 p-1 hover:bg-white ransition-all duration-300"
          onClick={() => addItem(card)}
        >
          <PlusIcon className="md:w-4 md:h-4 w-3 h-3 font-bold text-gray-200 hover:text-black" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="font-light md:text-[11px] text-[9px] uppercase">
            {card.title}{' '}
          </p>
          <button className="m-1">
            <BookmarkIcon className="md:w-4 md:h-4 w-3 h-3" />
          </button>
        </div>
        <p className="font-light md:text-[11px] text-[9px]">
          {priceFormat(card.price)}
        </p>
      </div>
    </div>
  );
};
