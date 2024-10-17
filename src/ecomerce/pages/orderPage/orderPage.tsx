import { useMyOrders, useNavBarStore } from '../../../stores';
import { OrderCard } from '../../components';

export const OrderPage = () => {
  const { menuHeight } = useNavBarStore();
  const { orderList } = useMyOrders();
  return (
    <div
      className="flex flex-col w-full justify-center items-center"
      style={{ paddingTop: `${menuHeight}px` }}
    >
      <div className="text-center mb-7 text-[20px]">My Orders</div>
      <div className="flex flex-col items-center w-full gap-3">
        {orderList.map((order) => (
          <OrderCard key={order.id} {...{ order }}></OrderCard>
        ))}
      </div>
    </div>
  );
};
