import { shopCardOrderItemProps } from '../../../stores';
import { priceFormat } from '../../utils';

interface ItemShopCarProps {
  item: shopCardOrderItemProps;
  onUpdateAmount: (item: shopCardOrderItemProps, type: '+' | '-') => void;
  onRemoveFunction: (id: number) => void;
}
export const ItemShopCar = ({
  item,
  onUpdateAmount,
  onRemoveFunction,
}: ItemShopCarProps) => {
  return (
    <div className="flex flex-row  divide-x divide-gray-500 border border-gray-500 animate__animated animate__fadeInRight">
      <img
        className="w-2/5"
        src={item.image}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '../default_image.png';
        }}
      ></img>
      <div className="flex flex-col w-2/5 justify-between p-2">
        <p className="font-light text-[11px] uppercase">{item.title}</p>
        <p className="font-light text-[13px] italic">
          {' '}
          {item.category || ''}, {priceFormat(item.price)}
        </p>

        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => onUpdateAmount(item, '+')}
            className=" text-[15px] uppercase px-3 py-1 m-1 rounded-full	bg-gray-200 hover:bg-slate-800	 hover:text-white"
          >
            +
          </button>
          <p className=" font-light text-[14px] uppercase">{item.amount}</p>
          <button
            onClick={() => onUpdateAmount(item, '-')}
            className="text-[15px] uppercase px-3 py-1 m-1 rounded-full	bg-gray-200 hover:bg-slate-800	 hover:text-white"
          >
            -
          </button>
        </div>
      </div>
      <div className="w-1/5 flex flex-col justify-center items-center">
        <button
          onClick={() => onRemoveFunction(item.id)}
          className="w-[25px]  border border-gray-500"
        >
          x
        </button>
      </div>
    </div>
  );
};
