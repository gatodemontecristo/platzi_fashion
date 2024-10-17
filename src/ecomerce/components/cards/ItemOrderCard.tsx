import { ArchiveBoxIcon } from '@heroicons/react/24/solid';
import { shopCardOrderItemProps } from '../../../stores';
import { priceFormat } from '../../utils';

interface itemOrderCardProps {
  order: shopCardOrderItemProps;
}
export const ItemOrderCard = ({ order }: itemOrderCardProps) => {
  return (
    <div className="flex flex-row  divide-x divide-gray-500 border border-gray-500">
      <img
        className="w-2/5"
        src={order.image}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '../default_image.png';
        }}
      ></img>
      <div className="flex flex-col w-3/5 justify-center gap-2 p-4">
        <p className="font-light text-[11px] uppercase">{order.title}</p>
        <p className="font-light text-[13px] italic">
          {order.category || ''}, {priceFormat(order.price)}
        </p>
        <div className="flex flex-row gap-3 items-center">
          <ArchiveBoxIcon className="h-6 w-6"></ArchiveBoxIcon>
          <p className="font-normal text-[13px]">{order.amount || ''} items</p>
        </div>
      </div>
    </div>
  );
};
