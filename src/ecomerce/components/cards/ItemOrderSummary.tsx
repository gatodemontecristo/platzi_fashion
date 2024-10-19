import { priceFormat } from '../../utils';
import { shopCardOrderItemProps } from '../../../stores';
import { Notyf } from 'notyf';
import { TrashIcon } from '@heroicons/react/24/solid';

interface ItemOrderSummaryProps {
  removeItem: (id: number) => void;
  item: shopCardOrderItemProps;
  notyf: Notyf;
}
export const ItemOrderSummary = ({
  removeItem,
  item,
  notyf,
}: ItemOrderSummaryProps) => {
  const onRemoveFunction = (id: number) => {
    removeItem(id);
    notyf.error('The product has been removed from the shopping cart.');
  };
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      <p className="text-gray-500 w-[10%]">x{item.amount}</p>
      <p className="text-gray-700 w-[50%]">{item.title}</p>
      <p className="text-gray-700 w-[30%]">{priceFormat(item.price)}</p>
      <button
        className="rounded-md bg-white hover:bg-black hover:text-white p-2 transition-all duration-300 "
        onClick={() => onRemoveFunction(item.id)}
      >
        <TrashIcon className="h-5  w-5 fill-curren"></TrashIcon>
      </button>
    </div>
  );
};
