import { priceFormat } from '../../ecomerce/utils';

interface ItemFormProps {
  amount: number;
  title: string;
  withLine?: boolean;
  withBold?: boolean;
}
export const ItemForm = ({
  amount,
  title,
  withLine = true,
  withBold = false,
}: ItemFormProps) => {
  return (
    <>
      {withLine && (
        <div className="flex flex-row justify-end p-0 border-t  border-gray-200  w-full "></div>
      )}
      <div className="flex flex-row  items-center w-full justify-between">
        <p className="text-gray-700">{title}</p>
        <p className={`text-gray-700 ${withBold && 'font-bold'}`}>
          {priceFormat(amount)}
        </p>
      </div>
    </>
  );
};
