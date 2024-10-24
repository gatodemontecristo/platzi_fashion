import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { myOrdersProps, useMyOrders, useNavBarStore } from '../../../stores';
import { ItemOrderCard } from '../../components';
import { nanoid } from 'nanoid';
import { priceFormat } from '../../utils';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export const OrderDetailPage = () => {
  const { orderId } = useParams();
  const { getOrderCollection } = useMyOrders();
  const [collection, setcollection] = useState<myOrdersProps | null>(null);
  useEffect(() => {
    setcollection(getOrderCollection(orderId || ''));
  }, [orderId]);
  const { menuHeight } = useNavBarStore();
  const navigate = useNavigate();
  const onNavigateOrder = () => {
    navigate('/orders');
  };
  return (
    <div
      className="flex flex-col w-full justify-center items-center gap-4 mb-8"
      style={{ paddingTop: `${menuHeight}px` }}
    >
      <div
        className="group flex flex-row text-center mb-3 text-[20px] gap-3"
        onClick={onNavigateOrder}
      >
        <ChevronLeftIcon className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-translate-x-4"></ChevronLeftIcon>
        <p>Detail Order</p>
      </div>
      <div className="flex flex-col items-center lg:w-1/4 md:w-1/2 w-3/4 gap-3">
        {collection?.shopOrderCollection.map((order) => (
          <ItemOrderCard key={nanoid()} {...{ order }}></ItemOrderCard>
        ))}
      </div>
      <div className="flex flex-row justify-end p-0 border-t  border-gray-200 lg:w-1/4 md:w-1/2 w-3/4"></div>
      <div className="flex flex-row  items-center lg:w-1/4 md:w-1/2 w-3/4 justify-between p-4">
        <p className="text-gray-700 font-normal md:text-[24px] text-[20px]">
          Order Total :
        </p>
        <p className="text-gray-700 font-normal md:text-[24px] text-[20px]">
          {priceFormat(collection?.total || 0)}
        </p>
      </div>
    </div>
  );
};
