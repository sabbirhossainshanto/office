import { MdOutlineContentCopy } from "react-icons/md";
import { useGetTV } from "../../hooks/tv";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";

const TV = () => {
  const { data } = useGetTV();

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
            <h5>TV</h5>
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
                  <th>Name</th>
                  <th>Channel</th>
                  <th>Is Live</th>
                  <th>League</th>
                  <th>Match ID</th>
                  <th>Now Playing</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {data?.result?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item?.Name}</td>

                      <td>
                        {item?.Channel}{" "}
                        <MdOutlineContentCopy
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCopyToClipBoard(item?.link)}
                        />
                      </td>
                      <td>{item?.IsLive} </td>
                      <td>{item?.League} </td>
                      <td>{item?.MatchID} </td>
                      <td>{item?.NowPlaying} </td>

                      <td>{item?.Type} </td>
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

export default TV;
