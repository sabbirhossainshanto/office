import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";

const ChangeStatus = ({ setShowChangeStatus }) => {
  const location = useLocation();

  /* close modal ck=lick outside */
  const statusRef = useRef();
  useCloseModalClickOutside(statusRef, () => {
    setShowChangeStatus(false);
  });

  const [betStatus, setBetStatus] = useState(false);
  const [userStatus, setUserStatus] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(false);

  return (
    <>
      <div className="content-backdrop fade show"></div>
      <div
        className="modal fade show"
        id="modalCenter"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" ref={statusRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Change Status
              </h5>
              <button
                onClick={() => setShowChangeStatus(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onClick={(e) => e.preventDefault()}>
              <div className="modal-body">
                <div className="row">
                  <div className="col mb-3">
                    <label className="switch">
                      <input
                        onChange={() => setUserStatus((prev) => !prev)}
                        type="checkbox"
                        className="switch-input is-valid"
                        checked={userStatus}
                      />
                      <span className="switch-toggle-slider">
                        <span className="switch-on"></span>
                        <span className="switch-off"></span>
                      </span>
                      <span className="switch-label">User Status</span>
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label className="switch">
                      <input
                        onChange={() => setBetStatus((prev) => !prev)}
                        type="checkbox"
                        className="switch-input"
                        checked={betStatus}
                      />
                      <span className="switch-toggle-slider">
                        <span className="switch-on"></span>
                        <span className="switch-off"></span>
                      </span>
                      <span className="switch-label">Betting Status</span>
                    </label>
                  </div>
                </div>
                {location.pathname !== "/clients-with-balance" &&
                location.pathname !== "/view-client" ? (
                  <div className="row">
                    <div className="col mb-3">
                      <label className="switch">
                        <input
                          onChange={() =>
                            setRegistrationStatus((prev) => !prev)
                          }
                          type="checkbox"
                          className="switch-input"
                          checked={registrationStatus}
                        />
                        <span className="switch-toggle-slider">
                          <span className="switch-on"></span>
                          <span className="switch-off"></span>
                        </span>
                        <span className="switch-label">
                          Registration Status
                        </span>
                      </label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowChangeStatus(false)}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeStatus;
