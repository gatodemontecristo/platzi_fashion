import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChildFashionRoutes, FashionRoutes } from "../ecomerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FashionRoutes />,
    children: ChildFashionRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
