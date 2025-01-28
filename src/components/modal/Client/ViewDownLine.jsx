import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useGetIndex } from "../../../hooks";

const ViewDownLine = ({ viewDownLineId, setViewDownLineId }) => {
  const payload = {
    downlineId: viewDownLineId,
    type: "viewDownline",
  };
  const { data } = useGetIndex(payload);
  const downLineRef = useRef();
  useCloseModalClickOutside(downLineRef, () => {
    setViewDownLineId(false);
  });

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
          <div className="modal-content" ref={downLineRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">
                View DownLine
              </h5>
              <button
                onClick={() => setViewDownLineId(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <div className="modal-body">
                <div className="row">
                  {data?.result &&
                    Object.entries(data?.result).map(([key, value]) => {
                      return (
                        <div
                          key={key}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <p>{key}</p> <p>:</p>
                          <p>{value}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setViewDownLineId(false)}
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDownLine;
