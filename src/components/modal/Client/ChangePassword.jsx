import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";

const ChangePassword = ({ setShowChangePassword }) => {
  /* close modal click outside */
  const changePasswordRef = useRef();
  useCloseModalClickOutside(changePasswordRef, () => {
    setShowChangePassword(false);
  });

  const { register } = useForm();

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
          <div className="modal-content" ref={changePasswordRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Change Password
              </h5>
              <button
                onClick={() => setShowChangePassword(false)}
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
                    <label htmlFor="nameWithTitle" className="form-label">
                      New Password
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                      })}
                      type="password"
                      id="nameWithTitle"
                      className="form-control"
                      placeholder="Enter New Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="nameWithTitle" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword", {
                        required: true,
                      })}
                      type="password"
                      id="nameWithTitle"
                      className="form-control"
                      placeholder="Enter Confirm Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="nameWithTitle" className="form-label">
                      Transaction Code
                    </label>
                    <input
                      {...register("mpassword", {
                        required: true,
                      })}
                      type="text"
                      id="nameWithTitle"
                      className="form-control"
                      placeholder="Enter Transaction Code"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
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

export default ChangePassword;
