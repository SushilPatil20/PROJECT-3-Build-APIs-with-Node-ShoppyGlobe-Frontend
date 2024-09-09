import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Cart from "./components/cartComponents/Cart.jsx";
import ProductList from "./components/productComponents/ProductList.jsx";
import ProductDetails from "./components/productComponents/ProductDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CheckOut from "./components/CheckOut.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
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
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/orderConfirmation",
        element: <OrderConfirmation />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);
