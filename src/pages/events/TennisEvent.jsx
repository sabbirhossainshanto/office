import { useState } from "react";
import { useGetIndex } from "../../hooks";
import AddVideo from "../../components/modal/Events/AddVideo";

const TennisEvent = () => {
  const [addVideoId, setAddVideoId] = useState(null);
  const payload = {
    eventTypeId: 1,
    type: "viewEvents",
  };
  const { data, refetch } = useGetIndex(payload);

  return (
    <>
      {addVideoId && (
        <AddVideo
          refetch={refetch}
          addVideoId={addVideoId}
          setAddVideoId={setAddVideoId}
        />
      )}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div className="card-header">
            <h5>Tennis</h5>
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
                  <th>Event ID</th>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>TV</th>
                  <th>In-Play</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {data?.result?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item?.eventId} </td>
                      <td>{item?.eventName}</td>
                      <td>{item?.date}</td>
                      <td style={{ color: item?.isTv == 1 ? "green" : "red" }}>
                        {item?.isTv == 1 ? "Yes" : "No"}
                      </td>
                      <td
                        style={{ color: item?.inPlay == 1 ? "green" : "red" }}
                      >
                        {item?.inPlay == 1 ? "Yes" : "No"}
                      </td>
                      <td>
                        <a
                          onClick={() => setAddVideoId(item?.eventId)}
                          style={{
                            color: "white",
                          }}
                          className="btn btn-icon btn-sm btn-success"
                        >
                          V
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

export default TennisEvent;
