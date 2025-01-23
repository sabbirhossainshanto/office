import { Pagination } from "rsuite";
import { useGetOpenMarket } from "../../../hooks/market";
import { useState } from "react";

const Cricket = () => {
  const [activePage, setActivePage] = useState(1);
  const payload = {
    pagination: true,
    page: activePage,
    eventTypeId: 4,
  };
  const { data } = useGetOpenMarket(payload);

  return (
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
                <th>EventName</th>
                <th>MarketId</th>
                <th>Market Name</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {data?.result?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item?.eventName}</td>
                    <td>{item?.marketId}</td>
                    <td>{item?.marketName}</td>
                    <td>{item?.score} </td>
                    <td>
                      {" "}
                      <a
                        style={{
                          color: "white",
                        }}
                        className="btn btn-icon btn-sm btn-success"
                      >
                        D
                      </a>
                      &nbsp;{" "}
                      <a
                        style={{
                          color: "white",
                        }}
                        className="btn btn-icon btn-sm btn-dark"
                      >
                        S
                      </a>{" "}
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
  );
};

export default Cricket;
