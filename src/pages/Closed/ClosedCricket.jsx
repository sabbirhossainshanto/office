import { MdOutlineContentCopy } from "react-icons/md";
import { useGetIndex } from "../../hooks";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";

const ClosedCricket = () => {
  const payload = {
    type: "closedMarket",
    eventTypeId: 4,
  };
  const { data } = useGetIndex(payload);

  return (
    <>
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
                  <th>Name</th>
                  <th>PNL</th>
                  <th>Result</th>
                  <th>Time</th>
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

                      <td>{item?.name}</td>
                      <td>{item?.pnl}</td>
                      <td>{item?.result} </td>
                      <td>{item?.time} </td>
                      <td style={{ display: "flex", gap: "4px" }}>
                        <a
                          style={{
                            color: "white",
                          }}
                          className="btn btn-icon btn-sm btn-dark"
                        >
                          S
                        </a>

                        <a
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

export default ClosedCricket;
