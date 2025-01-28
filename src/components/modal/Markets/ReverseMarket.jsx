import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import handleRandomToken from "../../../utils/handleRandomToken";
import { useDispatch } from "react-redux";
import { useIndex } from "../../../hooks";
import { setShowReverseMarket } from "../../../redux/features/global/globalSlice";
import { useGetOpenMarket } from "../../../hooks/market";
import { useLocation } from "react-router-dom";

const ReverseMarket = () => {
  const location = useLocation();
  let payload = {};
  if (location.pathname === "/all-markets") {
    payload.pagination = true;
    payload.eventTypeId = 0;
  }
  if (location.pathname === "/cricket") {
    payload.pagination = true;
    payload.eventTypeId = 4;
  }
  const { refetch } = useGetOpenMarket();
  const dispatch = useDispatch();
  const { mutate: reverseMarket } = useIndex();
  const reverseMarketRef = useRef();
  useCloseModalClickOutside(reverseMarketRef, () => {
    dispatch(setShowReverseMarket(false));
  });
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async ({ marketId }) => {
    const generatedToken = handleRandomToken();
    const payload = {
      marketId,
      type: "reverseMarket",
      token: generatedToken,
    };

    reverseMarket(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          if (
            location.pathname === "/cricket" ||
            location.pathname === "/all-markets"
          ) {
            refetch();
          }
          toast.success(data?.result?.message);
          reset();
          closeModal();
        } else {
          toast.error(data?.error?.status?.[0]?.description);
        }
      },
    });
  };

  const closeModal = () => {
    dispatch(setShowReverseMarket(false));
  };
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
          <div className="modal-content" ref={reverseMarketRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Reverse Market
              </h5>
              <button
                onClick={closeModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="row">
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Market ID
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("marketId", {
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
                  onClick={closeModal}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Reverse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReverseMarket;
