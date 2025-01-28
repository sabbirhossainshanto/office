import { DateRangePicker, Pagination } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useDatePicker from "../../hooks/useDatePicker";
import { useStatement } from "../../hooks/statement";
const PNL = () => {
  const [fetchPNL, setFetchPNL] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const downlineId = params.get("downlineId");
  const role = params.get("role");
  const id = params.get("id");
  const [activePage, setActivePage] = useState(1);
  const [showBetsModal, setShowBetsModal] = useState(false);
  const [marketId, setMarketId] = useState("");
  const { fromDate, toDate, onChange } = useDatePicker();
  const { mutate: getPNL, data: pnl } = useStatement();
  const meta = pnl?.pagination;

  useEffect(() => {
    if (fetchPNL) {
      const payload = {
        downlineId,
        fromDate,
        toDate,
        role,
        id,
        page: activePage,
        pagination: true,
      };

      getPNL(payload);
    }
  }, [activePage, fetchPNL, downlineId, fromDate, toDate, role, getPNL, id]);

  const defineColor = (transfer_type, pl) => {
    if (transfer_type === "deposit") {
      return "pl-deposit";
    }
    if (transfer_type === "withdraw") {
      return "pl-withdraw";
    }
    if (pl > 0) {
      return "text-green";
    }
    if (pl < 0) {
      return "text-danger";
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* {showBetsModal && (
        <SettleBets
          setShowBetsModal={setShowBetsModal}
          marketId={marketId}
          searchUser={downlineId}
        />
      )} */}
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div
              id="formValidationExamples"
              className="row g-3 fv-plugins-bootstrap5 fv-plugins-framework"
            >
              <div className="col-md-6 col-12 mb-4">
                <label htmlFor="flatpickr-range" className="form-label">
                  Range Picker
                </label>
                <DateRangePicker
                  format="yyyy-MM-dd"
                  editable
                  onChange={onChange}
                  defaultValue={[
                    new Date(new Date().setDate(new Date().getDate() - 30)),
                    new Date(),
                  ]}
                  block
                />
              </div>

              <div className="col-12">
                <button
                  onClick={() => setFetchPNL(true)}
                  className="btn btn-primary"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-3" />
      <div className="card">
        <div
          className="card-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>Clients</h5>
          <Pagination
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
          />
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th style={{ textAlign: "right" }}>PL</th>
                <th style={{ textAlign: "right" }}>Balance</th>
                <th style={{ textAlign: "left" }}>Date</th>

                <th style={{ textAlign: "left" }}>Narration</th>
                <th style={{ textAlign: "left" }}>Type</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {pnl?.result?.map((item, i) => {
                const handleSettledBets = (statement_type, market_id) => {
                  if (statement_type === "Betting P&L") {
                    setMarketId(market_id);
                    setShowBetsModal(true);
                  }
                };
                return (
                  <tr
                    key={i}
                    style={{
                      cursor: `${
                        item?.statement_type === "Betting P&L" ? "pointer" : ""
                      }`,
                    }}
                    onClick={() =>
                      handleSettledBets(item?.statement_type, item?.market_id)
                    }
                  >
                    <td
                      style={{ textAlign: "right" }}
                      className={`
                        ${defineColor(item?.transfer_type, item?.pl)}
                        `}
                    >
                      <strong>{item?.pl}</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>{item?.balance}</td>
                    <td style={{ textAlign: "left" }}>{item?.date_added}</td>
                    <td style={{ textAlign: "left" }}>{item?.narration}</td>
                    <td style={{ textAlign: "left" }}>{item?.transfer_type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {meta && (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Pagination
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
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PNL;
