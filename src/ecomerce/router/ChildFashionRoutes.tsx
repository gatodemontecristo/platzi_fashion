import { Navigate } from 'react-router-dom';
import { CheckoutPage, PromoPage } from '../pages';

export const ChildFashionRoutes = [
  { path: 'shop', element: <PromoPage /> },
  { path: 'checkout', element: <CheckoutPage /> },
  { path: '/*', element: <Navigate to="/shop" /> },
  { path: '/', element: <Navigate to="/shop" /> },
];
