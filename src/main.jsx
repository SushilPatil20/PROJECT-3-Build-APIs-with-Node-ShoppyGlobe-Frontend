import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cartComponents/Cart.jsx";
import ProductList from "./components/productComponents/ProductList.jsx";
import ProductDetails from "./components/productComponents/ProductDetails.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
