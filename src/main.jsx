import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Test from "./components/home/Test.jsx";
import NotFoundPage from "./components/home/NotFoundPage.jsx";
import SingleTest from "./components/home/SingleTest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/test",
    element: <Test />,
    children: [
      {
        path: "/test/:profile",
        element: <SingleTest />
      }
    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
