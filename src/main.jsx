import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import BeautAI from "./Components/BeautAI";
import RoutinePage from "./Components/RoutinePage/RoutinePage.jsx";
import "./index.css";
import RoutineHomePage from "./Components/RoutineHomePage/RoutineHomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/routineHome",
    element: <RoutineHomePage />,
  },
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
  <RouterProvider router={router} />
);
