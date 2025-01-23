import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import handleRandomToken from "../../../utils/handleRandomToken";
import { useGetSingleRunner } from "../../../hooks/runner";
import { useAddResult } from "../../../hooks/result";

const MatchResult = ({
  setShowMatchResult,
  refetchMatchResult,
  setSingleCricket,
  singleCricket,
  showDummy,
  setShowDummy,
}) => {
  const { mutate: addResult } = useAddResult();
  const { data: runners } = useGetSingleRunner({
    marketId: singleCricket?.marketId,
  });

  const matchResultRef = useRef();
  useCloseModalClickOutside(matchResultRef, () => {
    setShowMatchResult(false);
    setSingleCricket({});
    setShowDummy(false);
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ runner }) => {
    const [id, name] = runner.split("//");
    const generatedToken = handleRandomToken();
    let payload = {
      marketId: singleCricket?.marketId,
      fancy: 0,
      id,
      name,
      token: generatedToken,
      showDummy,
    };

    addResult(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetchMatchResult();
          toast.success(data?.result?.message);
          setShowMatchResult(false);
          setShowDummy(false);
        } else {
          toast.error(data?.error?.status?.[0]?.description);
        }
      },
    });
  };

  if (!runners) {
    return null;
  }

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
          <div className="modal-content" ref={matchResultRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Match Result
              </h5>
              <button
                onClick={() => setShowMatchResult(false)}
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
                      Team Name
                    </label>
                    <div className="col-sm-10">
                      <select
                        {...register("runner", {
                          required: true,
                        })}
                        className="select2 form-select select2-hidden-accessible"
                      >
                        {runners?.result?.map((runner) => {
                          return (
                            <option
                              key={`${runner?.id}//${runner?.name}`}
                              value={`${runner?.id}//${runner?.name}`}
                            >
                              {runner?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => {
                    setShowMatchResult(false);
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

export default MatchResult;
