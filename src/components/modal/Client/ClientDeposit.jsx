import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";

const ClientDeposit = ({ setClientDeposit }) => {
  const depositRef = useRef();
  useCloseModalClickOutside(depositRef, () => {
    setClientDeposit(false);
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
          <div className="modal-content" ref={depositRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Deposit
              </h5>
              <button
                onClick={() => setClientDeposit(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onClick={(e) => e.preventDefault()}>
              <div className="modal-body">
                <div className="row">
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Payment
                    </label>
                    <div className="col-sm-10">
                      <select
                        {...register("paymentId", {
                          required: true,
                        })}
                        id="type"
                        name="paymentId"
                        className="select2 form-select select2-hidden-accessible"
                        data-allow-clear="true"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="2" selected="">
                          Select
                        </option>
                        {[]?.map((method, i) => {
                          return (
                            <option key={i} value={method?.id}>
                              {method?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Amount
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("amount", {
                          required: true,
                        })}
                        type="number"
                        className="form-control"
                        id="basic-default-name"
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      UTR Code
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("utr", {
                          required: true,
                        })}
                        type="number"
                        className="form-control"
                        id="basic-default-name"
                        placeholder="UTR Code"
                      />
                    </div>
                  </div>

                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Deposit Slip
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="file"
                        className="form-control"
                        id="basic-default-name"
                        placeholder="Slip"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setClientDeposit(false)}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Deposit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDeposit;
