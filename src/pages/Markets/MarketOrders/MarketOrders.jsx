import { MdOutlineContentCopy } from "react-icons/md";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetOpenOrders } from "../../../hooks/openOrder";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const MarketOrders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const marketId = params.get("marketId");
  const { data } = useGetOpenOrders({ marketId });

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
            <button
              onClick={() => navigate(-1)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <IoChevronBackCircleSharp size={20} /> <span>Back</span>
            </button>
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
                  <th>User Id</th>
                  <th>EventName</th>
                  <th>Market Name</th>
                  <th>Odd</th>
                  <th>Date</th>
                  <th>Fancy</th>
                  <th>Place Name</th>
                  <th>Stake</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {data?.result?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {item?.userId}{" "}
                        <MdOutlineContentCopy
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCopyToClipBoard(item?.userId)}
                        />
                      </td>
                      <td>{item?.eventName}</td>
                      <td>{item?.marketName}</td>
                      <td>{item?.odd} </td>
                      <td>{item?.date} </td>
                      <td>{item?.fancy} </td>
                      <td
                        style={{
                          backgroundColor:
                            item?.back == 0 ? "#a7d8fd" : "#f9c9d4",
                          color: "black",
                        }}
                      >
                        {item?.placeName}{" "}
                      </td>
                      <td>{item?.stake} </td>
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

export default MarketOrders;
