import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
