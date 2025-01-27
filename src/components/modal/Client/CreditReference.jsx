import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";

const CreditReference = ({ setShowCreditRef }) => {
  /* close modal click outside */
  const creditRef = useRef();
  useCloseModalClickOutside(creditRef, () => {
    setShowCreditRef(false);
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
          <div className="modal-content" ref={creditRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Credit Reference
              </h5>
              <button
                onClick={() => setShowCreditRef(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body" onClick={(e) => e.preventDefault()}>
              <div className="row">
                <div className="row mb-3" id="bank_account_name_div">
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Username
                    </label>
                    <div className="col-sm-10">loginname</div>
                  </div>

                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Credit Reference
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("amount", {
                          required: true,
                        })}
                        type="text"
                        className="form-control"
                        id="basic-default-name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowCreditRef(false)}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditReference;
