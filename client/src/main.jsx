import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import Blogs from "./Pages/Blogs";

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
    path: "blogs",
    element: <Blogs />,
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
ReactDOM.render(
  <TransactionsProvider>
    <RouterProvider router={router} />
  </TransactionsProvider>,
  document.getElementById("root"),
);
