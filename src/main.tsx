import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Bubble from "./pages/bubble/Bubble.tsx";
import About from "./pages/about/About.tsx";
import Start from "./pages/start/Start.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/bubble",
    element: <Bubble />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
