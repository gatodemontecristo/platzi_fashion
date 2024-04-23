import { Navigate } from "react-router-dom";
import { ShoppPage } from "../pages";

export const ChildFashionRoutes = [
  { path: "shop", element: <ShoppPage/>},
  { path: "/*", element: <Navigate to="/shop" /> },
  { path: "/", element: <Navigate to="/shop" /> },
];
