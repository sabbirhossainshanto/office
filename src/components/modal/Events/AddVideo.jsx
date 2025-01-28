import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import handleRandomToken from "../../../utils/handleRandomToken";
import { useIndex } from "../../../hooks";

const AddVideo = ({ setAddVideoId, addVideoId, refetch }) => {
  const { mutate: addVideo } = useIndex();
  const addVideoRef = useRef();

  const closeModal = () => {
    setAddVideoId(null);
  };

  useCloseModalClickOutside(addVideoRef, () => {
    closeModal();
  });
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async ({ videoLink }) => {
    const generatedToken = handleRandomToken();
    const payload = {
      eventId: addVideoId,
      type: "addVideo",
      videoLink,
      token: generatedToken,
    };

    addVideo(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
          reset();
          closeModal();
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
          <div className="modal-content" ref={addVideoRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                Add Video
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
                      Add Video
                    </label>
                    <div className="col-sm-10">
                      <input
                        {...register("videoLink", {
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
                  Add Video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVideo;
