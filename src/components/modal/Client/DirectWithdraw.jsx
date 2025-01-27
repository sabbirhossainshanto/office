import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";

const DirectWithdraw = ({ setDirectWithdraw }) => {
  const directDepositRef = useRef();
  useCloseModalClickOutside(directDepositRef, () => {
    setDirectWithdraw(false);
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
          <div className="modal-content" ref={directDepositRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Direct Withdraw
              </h5>
              <button
                onClick={() => setDirectWithdraw(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onClick={(e) => e.preventDefault()}>
              <div className="modal-body">
                <div className="row">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ flexDirection: "column", width: "100%" }}
                      className="row mb-3"
                      id="bank_account_name_div"
                    >
                      <label
                        className="col-form-label"
                        htmlFor="basic-default-name"
                      >
                        userName Balance
                      </label>
                      <div className="col-sm-10">
                        <input
                          defaultValue={55}
                          type="number"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Amount"
                          readOnly
                        />
                      </div>
                    </div>
                    <div
                      style={{ flexDirection: "column", width: "100%" }}
                      className="row mb-3"
                      id="bank_account_name_div"
                    >
                      <label
                        className=" col-form-label"
                        htmlFor="basic-default-name"
                      >
                        userName after withdraw
                      </label>
                      <div className="col-sm-10">
                        <input
                          value={66}
                          type="number"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Amount"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ flexDirection: "column", width: "100%" }}
                      className="row mb-3"
                      id="bank_account_name_div"
                    >
                      <label
                        className="col-form-label"
                        htmlFor="basic-default-name"
                      >
                        userName2 Balance
                      </label>
                      <div className="col-sm-10">
                        <input
                          defaultValue={66}
                          type="number"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Amount"
                          readOnly
                        />
                      </div>
                    </div>
                    <div
                      style={{ flexDirection: "column", width: "100%" }}
                      className="row mb-3"
                      id="bank_account_name_div"
                    >
                      <label
                        className=" col-form-label"
                        htmlFor="basic-default-name"
                      >
                        userName2 after withdraw
                      </label>
                      <div className="col-sm-10">
                        <input
                          value={66}
                          type="number"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Amount"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      className="row mb-3"
                      style={{ flexDirection: "column", width: "100%" }}
                      id="bank_account_name_div"
                    >
                      <label
                        className=" col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Withdraw Amount
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Amount"
                          required
                        />
                      </div>
                    </div>
                    <div
                      style={{ flexDirection: "column", width: "100%" }}
                      className="row mb-3"
                      id="bank_account_name_div"
                    >
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Remark
                      </label>
                      <div className="col-sm-10">
                        <input
                          {...register("remark")}
                          type="text"
                          className="form-control"
                          id="basic-default-name"
                          placeholder="Remark"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ flexDirection: "column", width: "60%" }}
                    className="row mb-3"
                    id="bank_account_name_div"
                  >
                    <label
                      className=" col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Transaction Code
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("mpassword")}
                        type="text"
                        className="form-control"
                        id="basic-default-name"
                        placeholder="Transaction Code"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setDirectWithdraw(false)}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectWithdraw;
