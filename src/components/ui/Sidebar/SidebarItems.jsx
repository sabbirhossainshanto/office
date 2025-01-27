import { Link } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setShowDeleteMarket,
  setShowReverseMarket,
} from "../../../redux/features/global/globalSlice";

const SidebarItems = () => {
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const { setShowSidebar } = useContextState();
  return (
    <>
      <ul className="menu-inner overflow-auto" style={{ marginLeft: "0px" }}>
        <li className="menu-item">
          <Link
            onClick={() => setShowSidebar(false)}
            to="/"
            className="menu-link"
          >
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Dashboards">Dashboard</div>
          </Link>
        </li>
        <li className={`menu-item ${showMarket ? "open" : ""}`}>
          <a
            onClick={() => {
              setShowMarket((prev) => !prev);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder(false);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Branch">Markets</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/cricket"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Branches">Cricket</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/all-markets"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Branch">All</div>
              </Link>
              <a
                onClick={() => {
                  dispatch(setShowDeleteMarket(true));
                  setShowSidebar(false);
                }}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Branch">Delete Market</div>
              </a>
              <a
                onClick={() => {
                  dispatch(setShowReverseMarket(true));
                  setShowSidebar(false);
                }}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Branch">Reverse Market</div>
              </a>
            </li>
          </ul>
        </li>{" "}
        <li className={`menu-item ${showEvent ? "open" : ""}`}>
          <a
            onClick={() => {
              setShowMarket(false);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent((prev) => !prev);
              setShowOrder(false);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Branch">Events</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/view-branches"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Branches">Cricket</div>
              </Link>
            </li>

            <li className="menu-item">
              <a
                onClick={() => {
                  setShowSidebar(false);
                }}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Branch">Football</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                onClick={() => {
                  setShowSidebar(false);
                }}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Branch">Tennis</div>
              </a>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showOrder ? "open" : ""}`}>
          <a
            onClick={() => {
              setShowMarket(false);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder((prev) => !prev);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Branch">Orders</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/cricket-order"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Branches">Cricket</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/all-order"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Branches">All</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showClose ? "open" : ""}`}>
          <a
            style={{}}
            onClick={() => {
              setShowMarket(false);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder((prev) => !prev);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Settings">Closed</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="/view-banner"
                onClick={() => setShowSidebar(false)}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Banners">Cricket</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link
                onClick={() => setShowSidebar(false)}
                to="/add-banner"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="Add Banner">All</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showTV ? "open" : ""}`}>
          <a
            style={{}}
            onClick={() => {
              setShowMarket(false);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder(false);
              setShowTV((prev) => !prev);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Settings">TV</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="/tv"
                onClick={() => setShowSidebar(false)}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Banners">TV</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showBanner ? "open" : ""}`}>
          <a
            style={{}}
            onClick={() => {
              setShowMarket(false);
              setShowBanner((prev) => !prev);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder(false);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Settings">Banner</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="/view-banner"
                onClick={() => setShowSidebar(false)}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Banners">Banner</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showBanner ? "open" : ""}`}>
          <a
            style={{}}
            onClick={() => {
              setShowMarket(false);
              setShowBanner((prev) => !prev);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder(false);
              setShowTV(false);
              setShowClient(false);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Settings">Banner</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="/view-banner"
                onClick={() => setShowSidebar(false)}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Banners">Banner</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${showClient ? "open" : ""}`}>
          <a
            style={{}}
            onClick={() => {
              setShowMarket(false);
              setShowBanner(false);
              setShowClose(false);
              setShowEvent(false);
              setShowOrder(false);
              setShowTV(false);
              setShowClient((prev) => !prev);
            }}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Settings">Client</div>
          </a>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="/view-client"
                onClick={() => setShowSidebar(false)}
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="View Banners">View Client</div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarItems;
