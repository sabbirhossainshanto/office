import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
const ListItems = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const navigate = useNavigate();

  const orderRef = useRef();
  useCloseModalClickOutside(orderRef, () => {
    setShowOrder(false);
  });
  const closedRef = useRef();
  useCloseModalClickOutside(closedRef, () => {
    setShowClose(false);
  });
  const eventsRef = useRef();
  useCloseModalClickOutside(eventsRef, () => {
    setShowEvent(false);
  });
  const tvRef = useRef();
  useCloseModalClickOutside(tvRef, () => {
    setShowTV(false);
  });
  const bannerRef = useRef();
  useCloseModalClickOutside(bannerRef, () => {
    setShowBanner(false);
  });

  const marketRef = useRef();
  useCloseModalClickOutside(marketRef, () => {
    setShowMarket(false);
  });

  const handleNavigate = (link) => {
    navigate(`/${link}`);
    setShowEvent(false);
    setShowClose(false);
    setShowTV(false);
    setShowBanner(false);
    setShowMarket(false);
  };
  return (
    <ul className="menu-inner" style={{ marginLeft: "0px" }}>
      <li className="menu-item">
        <Link to="/" className="menu-link">
          <i className="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Dashboards">Dashboard</div>
        </Link>
      </li>

      <li ref={marketRef} className={`menu-item ${showMarket ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowMarket(true);
            setShowEvent(false);
            setShowTV(false);
            setShowClose(false);
            setShowBanner(false);
            setShowOrder(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Markets</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item ">
            <a
              onClick={() => handleNavigate("view-whitelabel")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">Cricket</div>
            </a>
          </li>

          <li className="menu-item">
            <a
              onClick={() => {
                setShowEvent(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Branch">All</div>
            </a>
          </li>
          <li className="menu-item">
            <a
              onClick={() => {
                setShowEvent(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Branch">Delete Market</div>
            </a>
          </li>
        </ul>
      </li>

      <li ref={eventsRef} className={`menu-item ${showEvent ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowEvent(true);
            setShowTV(false);
            setShowClose(false);
            setShowBanner(false);
            setShowMarket(false);
            setShowOrder(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Events </div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item ">
            <a
              onClick={() => handleNavigate("view-branches")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">Cricket</div>
            </a>
          </li>

          <li className="menu-item">
            <a
              onClick={() => {
                setShowEvent(false);
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
                setShowEvent(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Branch">Tennis</div>
            </a>
          </li>
        </ul>
      </li>
      <li ref={orderRef} className={`menu-item ${showOrder ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowOrder(true);
            setShowEvent(false);
            setShowTV(false);
            setShowClose(false);
            setShowBanner(false);

            setShowMarket(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Orders</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a
              onClick={() => handleNavigate("view-client")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-user"></i>
              <div data-i18n="View Clients">Cricket</div>
            </a>
          </li>

          <li className="menu-item">
            <a
              onClick={() => handleNavigate("clients-with-balance")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-user"></i>
              <div data-i18n="Add Client">All</div>
            </a>
          </li>
        </ul>
      </li>
      <li ref={closedRef} className={`menu-item ${showClose ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowClose(true);

            setShowTV(false);
            setShowEvent(false);
            setShowBanner(false);
            setShowOrder(false);
            setShowMarket(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Settings">Closed</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a
              onClick={() => handleNavigate("view-banner")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Banners">Cricket</div>
            </a>
          </li>

          <li className="menu-item">
            <a
              onClick={() => handleNavigate("add-banner")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Banner">All</div>
            </a>
          </li>
        </ul>
      </li>

      <li ref={tvRef} className={`menu-item ${showTV ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowTV(true);
            setShowClose(false);

            setShowEvent(false);
            setShowBanner(false);
            setShowOrder(false);
            setShowMarket(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Settings">TV</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a
              onClick={() => handleNavigate("market-analysis")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Banners">TV</div>
            </a>
          </li>
        </ul>
      </li>
      <li ref={bannerRef} className={`menu-item ${showBanner ? "open" : ""}`}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => {
            setShowBanner(true);
            setShowTV(false);

            setShowClose(false);
            setShowEvent(false);
            setShowOrder(false);
            setShowMarket(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Settings">Banners</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a
              onClick={() => handleNavigate("client-report")}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Banners">Banners</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ListItems;
