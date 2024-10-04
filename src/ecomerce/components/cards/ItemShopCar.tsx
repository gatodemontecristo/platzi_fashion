import { shopCardOrderItemProps } from '../../../stores';

interface itemShopCarProps {
  item: shopCardOrderItemProps;
  onUpdateAmount: (item: shopCardOrderItemProps, type: '+' | '-') => void;
  onRemoveFunction: (id: number) => void;
}
export const ItemShopCar = ({
  item,
  onUpdateAmount,
  onRemoveFunction,
}: itemShopCarProps) => {
  return (
    <div className="flex flex-row  divide-x divide-gray-500 border border-gray-500">
      <img className="w-2/5" src={item.image}></img>
      <div className="flex flex-col w-2/5 justify-between p-2">
        <p className="font-light text-[11px] uppercase">{item.title}</p>
        <span className="w-auto self-start bg-gray-400 text-white text-[11px] font-light px-3 py-1 rounded-full">
          {item.category || ''}
        </span>
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
