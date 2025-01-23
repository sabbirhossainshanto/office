import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ChangePasswordSuccess from "../pages/ChangePasswordSuccess/ChangePasswordSuccess";
import ChangePasswordAfterLogin from "../pages/ChangePassword/ChangePasswordAfterLogin";
import Cricket from "../pages/Markets/Cricket/Cricket";
import AllMarkets from "../pages/Markets/AllMarkets/AllMarkets";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/change-password-after-login",
          element: <ChangePasswordAfterLogin />,
        },
        {
          path: "/cricket",
          element: <Cricket />,
        },
        {
          path: "/all-markets",
          element: <AllMarkets />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "/change-password-success",
      element: <ChangePasswordSuccess />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
