import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { myOrdersProps } from '../../../stores';
import { priceFormat } from '../../utils';
import { useNavigate } from 'react-router-dom';
interface orderCardProps {
  order: myOrdersProps;
}
export const OrderCard = ({ order }: orderCardProps) => {
  const navigate = useNavigate();
  const onNavigateOrderDetail = () => {
    navigate(`/orders/${order.id}`);
  };

  return (
    <div
      className="group flex flex-row justify-center items-center gap-4 lg:w-1/4 md:w-1/2 w-3/4 border border-gray-700 rounded-lg p-4 animate__animated animate__fadeInLeft"
      onClick={onNavigateOrderDetail}
    >
      <div className="flex flex-col w-2/5 gap-3">
        <div className="flex flex-row items-center ">
          <CalendarDaysIcon className="h-6 w-6 mr-2"></CalendarDaysIcon>{' '}
          <p className="font-light text-[16px]">{order.date}</p>
        </div>
        <div className="flex flex-row items-center">
          <ShoppingBagIcon className="h-6 w-6 mr-2"></ShoppingBagIcon>{' '}
          <p className="font-light text-[16px]">{order.articles} articles</p>
        </div>
      </div>
      <p className="w-2/5 font-light text-[21px]">{priceFormat(order.total)}</p>
      <div className="w-1/5 transition-transform duration-300 ease-in-out group-hover:translate-x-4">
        <ChevronRightIcon className="h-7 w-6 fill-curren" />
      </div>
    </div>
  );
};
