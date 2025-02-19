import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import handleRandomToken from "../../../utils/handleRandomToken";
import { useAddResult } from "../../../hooks/result";

const FancyResult = ({
  setShowFancyResult,
  refetchFancyResult,
  setSingleCricket,
  singleCricket,
  showDummy,
  setShowDummy,
}) => {
  const { mutate: addResult } = useAddResult();
  const updateFancyResultRef = useRef();
  useCloseModalClickOutside(updateFancyResultRef, () => {
    setShowFancyResult(false);
    setSingleCricket({});
    setShowDummy(false);
  });
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async ({ score }) => {
    const generatedToken = handleRandomToken();
    let payload = {
      marketId: singleCricket?.marketId,
      fancy: 1,
      id: score,
      token: generatedToken,
      showDummy,
    };

    addResult(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetchFancyResult();
          toast.success(data?.result?.message);
          reset();
          setShowFancyResult(false);
          setShowDummy(false);
        } else {
          toast.error(data?.error?.status?.[0]?.description);
        }
      },
    });
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
          <div className="modal-content" ref={updateFancyResultRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                {showDummy ? "Dummy Result" : "Match Result"}
              </h5>
              <button
                onClick={() => setShowFancyResult(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="row">
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="col-sm-2 col-form-label"
                    >
                      Event Name
                    </label>
                    <div className="col-sm-9" data-select2-id="26">
                      <div className="position-relative" data-select2-id="25">
                        {singleCricket?.eventName}
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="col-sm-2 col-form-label"
                    >
                      Market Name
                    </label>
                    <div className="col-sm-9" data-select2-id="26">
                      <div className="position-relative" data-select2-id="25">
                        {singleCricket?.marketName}
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Score
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("score", {
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
                  onClick={() => {
                    setShowFancyResult(false);
                    setShowDummy(false);
                  }}
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

export default FancyResult;
