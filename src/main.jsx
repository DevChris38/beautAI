import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import BeautAI from "./Components/BeautAI";
import RoutinePage from "./Components/RoutinePage/RoutinePage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/beautui",
  //   element: <BeautUI />,
  // },
  {
    path: "/routine",
    element: <RoutinePage />,
  },
  {
    path: "/beautai",
    element: <BeautAI />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);