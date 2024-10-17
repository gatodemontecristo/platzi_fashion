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
      {orderList.length === 0 ? (
        <div className="flex flex-col items-center gap-2">
          <img className="w-full" src="../video/latrell.gif" alt="" />
          <p className="font-light text-[16px]  mb-3 italic">
            Ups! There is no order generated.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-3">
          {orderList.map((order) => (
            <OrderCard key={order.id} {...{ order }}></OrderCard>
          ))}
        </div>
      )}
    </div>
  );
};
