import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import BeautUI from "./Components/BeautUI";
import RoutinePage from "./Components/RoutinePage/RoutinePage.jsx";
import "./index.css";
import RoutineHomePage from "./Components/RoutineHomePage/RoutineHomePage.jsx";

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
    path: "/routineHome",
    element: <RoutineHomePage />,
  },
  {
    path: "/routine",
    element: <RoutinePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
