import { Outlet } from 'react-router-dom';
import { NavDesk } from '../../components';
export const FashionRoutes = () => {
  return (
    <>
      <NavDesk></NavDesk>
      <Outlet></Outlet>
    </>
  );
};
