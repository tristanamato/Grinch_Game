import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import PlayerClassement from "./components/PlayerClassement/PlayerClassement.jsx";
import PlayerValidation from "./components/PlayerValidation/PlayerValidation.jsx";
import YouPlay from "./components/YouPlay/YouPlay.jsx";
import PageFinal from "./components/Page_final/PageFinal.jsx"
import Menu from "./components/Menu/Menu";
import CreationGame from "./components/CreationGame/CreationGame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      { path: "/PlayerValidation", element: <PlayerValidation /> },
      { path: "/PlayerClassement", element: <PlayerClassement /> },
      { path: "/YouPlay", element: <YouPlay /> },

      {
        path: "/finale",
        element: <PageFinal />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/CreationGame",
        element: <CreationGame />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
