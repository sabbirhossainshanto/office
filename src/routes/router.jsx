import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ChangePasswordSuccess from "../pages/ChangePasswordSuccess/ChangePasswordSuccess";
import ChangePasswordAfterLogin from "../pages/ChangePassword/ChangePasswordAfterLogin";
import Cricket from "../pages/Markets/Cricket/Cricket";
import AllMarkets from "../pages/Markets/AllMarkets/AllMarkets";
import MarketOrders from "../pages/Markets/MarketOrders/MarketOrders";
import TV from "../pages/TV/TV";
import CricketOrder from "../pages/Order/CricketOrder";
import AllOrder from "../pages/Order/AllOrder";
import ViewClient from "../pages/Client/ViewClient/ViewClient";
import CricketEvent from "../pages/events/CricketEvent";
import FootballEvent from "../pages/events/FootballEvent";
import TennisEvent from "../pages/events/TennisEvent";
import PNL from "../pages/PNL/PNL";
import ClosedCricket from "../pages/Closed/ClosedCricket";
import ClosedAll from "../pages/Closed/ClosedAll";
import ViewBanner from "../pages/Banner/ViewBanner";
import AddBanner from "../pages/Banner/AddBanner";

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
        {
          path: "/market-orders",
          element: <MarketOrders />,
        },
        {
          path: "/tv",
          element: <TV />,
        },
        {
          path: "/all-order",
          element: <AllOrder />,
        },
        {
          path: "/cricket-order",
          element: <CricketOrder />,
        },
        {
          path: "/view-client",
          element: <ViewClient />,
        },
        {
          path: "/cricket-event",
          element: <CricketEvent />,
        },
        {
          path: "/tennis-event",
          element: <TennisEvent />,
        },
        {
          path: "/football-event",
          element: <FootballEvent />,
        },
        {
          path: "/pnl",
          element: <PNL />,
        },
        {
          path: "/closed-cricket",
          element: <ClosedCricket />,
        },
        {
          path: "/closed-all",
          element: <ClosedAll />,
        },
        {
          path: "/view-banners",
          element: <ViewBanner />,
        },
        {
          path: "/add-banner",
          element: <AddBanner />,
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
