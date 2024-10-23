import { Notyf } from 'notyf';
import { useNavigate } from 'react-router-dom';
import { clearStore } from '../stores';

export const useNavOptions = () => {
  const navigate = useNavigate();
  const goToShop = () => {
    navigate('/shop');
  };
  const goToCheckout = () => {
    navigate('/checkout');
  };
  const goToMyOrders = () => {
    navigate('/orders');
  };
  const notyf = new Notyf();
  const cleanStoreage = () => {
    notyf.success('All data has been deleted.');
    clearStore();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return { goToShop, goToCheckout, goToMyOrders, cleanStoreage };
};
