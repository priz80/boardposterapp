import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Layout } from "./layouts/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const getBaseName = () => {
  if (!process.env.PUBLIC_URL) return "/";
  try {
    return new URL(process.env.PUBLIC_URL).pathname;
  } catch {
    return "/";
  }
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ],
  { basename: getBaseName() },
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
