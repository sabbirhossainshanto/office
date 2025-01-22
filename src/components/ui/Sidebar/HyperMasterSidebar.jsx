import { Link } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import { useState } from "react";

const HyperMasterSidebar = () => {
  const [showBranch, setShowBranch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showClients, setShowClients] = useState(false);

  const [showWhiteLabel, setShowWhiteLabel] = useState(false);
  const {
    setShowSidebar,
    setShowAddBranch,
    setShowSocialLink,
    setSiteNotification,
    setAddWhiteLabel,
  } = useContextState();
  return (
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
      <li className={`menu-item ${showWhiteLabel ? "open" : ""}`}>
        <a
          onClick={() => {
            setShowWhiteLabel((prev) => !prev);
            setShowBranch(false);
            setShowSettings(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Whitelabel</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/view-whitelabel"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">View Whitelabel</div>
            </Link>
          </li>

          <li className="menu-item">
            <a
              onClick={() => {
                setAddWhiteLabel(true);
                setShowSidebar(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Branch">Add Whitelabel</div>
            </a>
          </li>
        </ul>
      </li>{" "}
      <li className={`menu-item ${showBranch ? "open" : ""}`}>
        <a
          onClick={() => {
            setShowBranch((prev) => !prev);
            setShowSettings(false);

            setShowClients(false);

            setShowWhiteLabel(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Branch</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/view-branches"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">View Branches</div>
            </Link>
          </li>

          <li className="menu-item">
            <a
              onClick={() => {
                setShowAddBranch(true);
                setShowSidebar(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Branch">Add Branch</div>
            </a>
          </li>
        </ul>
      </li>
      <li className={`menu-item ${showClients ? "open" : ""}`}>
        <a
          onClick={() => {
            setShowClients((prev) => !prev);
            setShowBranch(false);
            setShowSettings(false);

            setShowWhiteLabel(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Branch">Clients</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/view-client"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">View Clients</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/clients-with-balance"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">Clients with balance</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/all-client"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">All Client</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/active-client"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">Active Client</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/inactive-client"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Branches">Inactive Client</div>
            </Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item ${showSettings ? "open" : ""}`}>
        <a
          style={{}}
          onClick={() => {
            setShowSettings((prev) => !prev);
            setShowBranch(false);

            setShowClients(false);

            setShowWhiteLabel(false);
          }}
          className="menu-link menu-toggle"
        >
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Settings">Settings</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <Link
              to="/view-banner"
              onClick={() => setShowSidebar(false)}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="View Banners">View Banners</div>
            </Link>
          </li>

          <li className="menu-item">
            <Link
              onClick={() => setShowSidebar(false)}
              to="/add-banner"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Add Banner">Add Banner</div>
            </Link>
          </li>

          <li className="menu-item">
            <a
              onClick={() => {
                setShowSocialLink(true);
                setShowSidebar(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Social Links">Social Links</div>
            </a>
          </li>
          <li className="menu-item">
            <a
              onClick={() => {
                setSiteNotification(true);
                setShowSidebar(false);
              }}
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bxs-institution"></i>
              <div data-i18n="Social Links">Site Notification</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HyperMasterSidebar;
