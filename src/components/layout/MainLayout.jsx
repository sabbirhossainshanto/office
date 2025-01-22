import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import { handleLogOut } from "../../utils/handleLogOut";
import { Settings } from "../../api";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import Sidebar from "../ui/Sidebar/Sidebar";
import NavListItem from "../ui/Navbar/NavListItem";
import Footer from "../ui/Footer/Footer";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useVerifyUser } from "../../hooks/auth";
import useContextState from "../../hooks/useContextState";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { showSidebar } = useContextState();
  const { data: userData } = useVerifyUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const disabledDevtool = Settings.disabledDevtool;
  /*if Token expire logout user */
  useEffect(() => {
    let isTokenExpired;
    if (token) {
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp;
      isTokenExpired = expirationTime < Date.now() / 1000;
      if (isTokenExpired) {
        handleLogOut();
        navigate("/login");
      }
      /* if forceLogin true in notice.json and token not available then logout */
    } else if (Settings.forceLogin) {
      if (!token) {
        handleLogOut();

        navigate("/login");
      }
    }
  }, [navigate, token]);

  /* Disabled devtool based on settings */
  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            handleLogOut();
            navigate("/login");
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);

  /* Handle login read only without password */
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const readOnlyLoginData = queryParams.get("data");
    if (readOnlyLoginData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(readOnlyLoginData));
        localStorage.setItem("readOnly", parsedData?.readOnly);
        localStorage.setItem("adminToken", parsedData?.token);
        localStorage.setItem("adminName", parsedData?.loginname);
        localStorage.setItem("adminRole", parsedData?.role);
        localStorage.setItem("adminSite", parsedData?.site);
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  }, [location]);

  useEffect(() => {
    if (userData && Object.keys(userData)?.length > 0) {
      if (userData?.success === false) {
        toast.error(userData?.message);
        handleLogOut();
        queryClient.invalidateQueries({ queryKey: ["validateUser"] });
        navigate("/login");
      }
    }
  }, [userData, navigate, queryClient]);
  return (
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Navbar />

        <div className="layout-page">
          <div className="content-wrapper">
            {showSidebar ? <Sidebar /> : <NavListItem />}
            <Outlet />
            <Footer />
          </div>

          <div className="content-backdrop fade "></div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
