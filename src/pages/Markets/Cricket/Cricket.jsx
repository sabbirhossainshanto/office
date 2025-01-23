// import { Pagination } from "rsuite";
import { useGetOpenMarket } from "../../../hooks/market";
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import FancyResult from "../../../components/modal/Markets/FancyResult";
import MatchResult from "../../../components/modal/Markets/MatchResult";

const Cricket = () => {
  // const [activePage, setActivePage] = useState(1);
  const payload = {
    pagination: true,
    // page: activePage,
    eventTypeId: 4,
  };
  const { data } = useGetOpenMarket(payload);
  const [showFancyResult, setShowFancyResult] = useState(false);
  const [showMatchResult, setShowMatchResult] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [singleCricket, setSingleCricket] = useState({});

  const handleOpenDummyModal = (item) => {
    if (item?.isFancy == 1) {
      setSingleCricket(item);
      setShowFancyResult(true);
    } else {
      setSingleCricket(item);
      setShowMatchResult(true);
    }
  };

  return (
    <>
      {showFancyResult && (
        <FancyResult
          setShowFancyResult={setShowFancyResult}
          setSingleCricket={setSingleCricket}
          singleCricket={singleCricket}
        />
      )}
      {showMatchResult && (
        <MatchResult
          setShowMatchResult={setShowMatchResult}
          setSingleCricket={setSingleCricket}
          singleCricket={singleCricket}
        />
      )}

      {showOrder && (
        <FancyResult
          setShowFancyResult={setShowOrder}
          setSingleCricket={setSingleCricket}
          singleCricket={singleCricket}
        />
      )}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div
            className="card-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5>Cricket</h5>
            {/* <Pagination
            prev
            next
            size="md"
            total={meta?.totalRecords}
            limit={meta?.recordsPerPage}
            activePage={activePage}
            onChangePage={setActivePage}
            maxButtons={5}
            ellipsis
            boundaryLinks
          /> */}
          </div>

          <div className="table-responsive text-nowrap">
            <table className="table table-hover table-sm">
              <thead className="table-dark">
                <tr>
                  <th>MarketId</th>
                  <th>EventName</th>
                  <th>Market Name</th>
                  <th>Score</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {data?.result?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {item?.marketId}{" "}
                        <MdOutlineContentCopy
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCopyToClipBoard(item?.marketId)}
                        />
                      </td>
                      <td>{item?.eventName}</td>
                      <td>{item?.marketName}</td>
                      <td>{item?.score} </td>
                      <td style={{ display: "flex", gap: "4px" }}>
                        {item?.isFancy == 1 ? (
                          <a
                            onClick={() => {
                              setShowFancyResult(true);
                              setSingleCricket(item);
                            }}
                            style={{
                              color: "white",
                            }}
                            className="btn btn-icon btn-sm btn-success"
                          >
                            FR
                          </a>
                        ) : (
                          <a
                            onClick={() => {
                              setShowMatchResult(true);
                              setSingleCricket(item);
                            }}
                            style={{
                              color: "white",
                            }}
                            className="btn btn-icon btn-sm btn-danger"
                          >
                            MR
                          </a>
                        )}

                        <a
                          onClick={() => handleOpenDummyModal(item)}
                          style={{
                            color: "white",
                          }}
                          className="btn btn-icon btn-sm btn-dark"
                        >
                          DR
                        </a>

                        <a
                          onClick={() => {
                            setShowOrder(true);
                            setSingleCricket(item);
                          }}
                          style={{
                            color: "white",
                          }}
                          className="btn btn-icon btn-sm btn-warning"
                        >
                          O
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {"meta" && (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                {/* <Pagination
                prev
                next
                size="md"
                total={meta?.totalRecords}
                limit={meta?.recordsPerPage}
                activePage={activePage}
                onChangePage={setActivePage}
                maxButtons={5}
                ellipsis
                boundaryLinks
              /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cricket;
