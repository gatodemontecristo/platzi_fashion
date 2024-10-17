import { Navigate } from 'react-router-dom';
import { CheckoutPage, PromoPage, OrderPage, OrderDetailPage } from '../pages';

export const ChildFashionRoutes = [
  { path: 'shop', element: <PromoPage /> },
  { path: 'checkout', element: <CheckoutPage /> },
  { path: 'orders', element: <OrderPage /> },
  { path: 'orders/:orderId', element: <OrderDetailPage /> },
  { path: '/*', element: <Navigate to="/shop" /> },
  { path: '/', element: <Navigate to="/shop" /> },
];
