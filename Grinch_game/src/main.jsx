import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Creategame from "./components/Creategame/Creategame.jsx";
import Creationgame from "./components/CreationGame/CreationGame.jsx";
import Menu from "./components/Menu/Menu";
import Joingame from "./components/Joingame/Joingame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Creategame",
        element: <Creategame />,
      },
      {
        path: "/Creationgame",
        element: <Creationgame />,
      },
      { path: "/menu", element: <Menu /> },
      {
        path: "/joingame",
        element: <Joingame />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
