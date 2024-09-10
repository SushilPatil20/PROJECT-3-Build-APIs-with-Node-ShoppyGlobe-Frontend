import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProductList from "./components/productComponents/ProductList.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Loader from "./components/Loader.jsx";

// ------------ Lazzy Loading Cart page ------------
const Cart = lazy(() => import(`./components/cartComponents/Cart.jsx`));

// ------------ Lazzy Loading Product Details page ------------
const ProductDetails = lazy(() =>
  import(`./components/productComponents/ProductDetails.jsx`)
);

// ------------ Lazzy Loading CheckOut Page ------------
const CheckOut = lazy(() => import(`./components/CheckOut.jsx`));

// ------------ Lazzy Loading Order Confirmation Page ------------
const OrderConfirmation = lazy(() =>
  import(`./components/OrderConfirmation.jsx`)
);

// ------------------- App routes -------------------

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
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <CheckOut />
          </Suspense>
        ),
      },
      {
        path: "/orderConfirmation",
        element: (
          <Suspense fallback={<Loader />}>
            <OrderConfirmation />
          </Suspense>
        ),
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
