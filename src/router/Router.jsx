import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/profile",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
