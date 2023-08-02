import "./index.css";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./app/store";
import {
  Home,
  Auth,
  Layout,
  Profile,
  Account,
  Section,
  Loading,
  Overview,
  HomeLayout,
  ProductItem,
  ProductList,
  CheckoutLayout,
} from "./routes";
import { ROUTE } from "./consts";

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTE.LOADING,
    element: <Loading />,
  },
  {
    path: ROUTE.ABSOLUTE,
    element: <Layout />,
    children: [
      {
        path: ROUTE.SECTION,
        element: <Section />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: ROUTE.PRODUCT_ITEM,
            element: <ProductItem />,
          },
        ],
      },
      {
        path: ROUTE.ACCOUNT,
        element: <Account />,
        children: [
          {
            path: ROUTE.AUTH,
            element: <Auth />,
          },
          {
            path: ROUTE.OVERVIEW,
            element: <Overview />,
          },
          {
            path: ROUTE.PROFILE,
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "checkout/shopping-bag/",
    element: <CheckoutLayout />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
