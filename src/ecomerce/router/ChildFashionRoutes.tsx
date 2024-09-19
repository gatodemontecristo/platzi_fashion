import { Navigate } from "react-router-dom";
import { PromoPage } from "../pages";


export const ChildFashionRoutes = [
  { path: "shop", element: <PromoPage/>},
  { path: "/*", element: <Navigate to="/shop" /> },
  { path: "/", element: <Navigate to="/shop" /> },
];
