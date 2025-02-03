import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/About us";
import ContactUs from "./pages/Contact us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <TransactionsProvider>
    <RouterProvider router={router} />
  </TransactionsProvider>
);
