import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useViewClients } from "../../../hooks/client";
import ClientDeposit from "../../../components/modal/Client/ClientDeposit";
import DirectWithdraw from "../../../components/modal/Client/DirectWithdraw";
import DirectDeposit from "../../../components/modal/Client/DirectDeposit";
import ChangePassword from "../../../components/modal/Client/ChangePassword";
import ChangeStatus from "../../../components/modal/Client/ChangeStatus";
import CreditReference from "../../../components/modal/Client/CreditReference";
import { Link, useNavigate } from "react-router-dom";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";

const ViewClient = () => {
  const showMoreRef = useRef(null);
  const navigate = useNavigate();
  const { mutate, data: clients, isSuccess } = useViewClients();
  const { handleSubmit, register, watch } = useForm();
  const watchSearchId = watch("searchId");
  const [directWithdraw, setDirectWithdraw] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [clientDeposit, setClientDeposit] = useState(false);
  const [directDeposit, setDirectDeposit] = useState(false);
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const [showCreditRef, setShowCreditRef] = useState(false);
  const [downLineId, setDownLineId] = useState("");
  const [showMore, setShowMore] = useState(null);
  useCloseModalClickOutside(showMoreRef, () => {
    setShowMore(null);
  });

  const handleViewClient = ({ searchId }) => {
    const payload = {
      searchId,
      type: "searchClient",
    };
    mutate(payload);
  };

  const handleNavigate = (client) => {
    const formatUserId = client?.userId?.split("-")[1];
    navigate(
      `/pnl?id=${formatUserId}&role=${client?.role}&downlineId=${client?.downlineId}`
    );
  };

  const handleOpenModal = (setModal, username) => {
    setModal(true);
    setDownLineId(username);
  };

  const handleShowMore = (i) => {
    if (i === showMore) {
      setShowMore(null);
    } else {
      setShowMore(i);
    }
  };

  return (
    <>
      {clientDeposit && (
        <ClientDeposit
          downlineId={downLineId}
          setClientDeposit={setClientDeposit}
        />
      )}

      {directWithdraw && (
        <DirectWithdraw
          downlineId={downLineId}
          setDirectWithdraw={setDirectWithdraw}
        />
      )}

      {showChangePassword && (
        <ChangePassword
          downlineId={downLineId}
          setShowChangePassword={setShowChangePassword}
        />
      )}
      {showChangeStatus && (
        <ChangeStatus
          downlineId={downLineId}
          setShowChangeStatus={setShowChangeStatus}
        />
      )}
      {showCreditRef && (
        <CreditReference
          downlineId={downLineId}
          setShowCreditRef={setShowCreditRef}
        />
      )}
      {directDeposit && (
        <DirectDeposit
          downlineId={downLineId}
          setDirectDeposit={setDirectDeposit}
        />
      )}

      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form
                id="formValidationExamples"
                className="row g-3 fv-plugins-bootstrap5 fv-plugins-framework"
                onSubmit={handleSubmit(handleViewClient)}
              >
                <div className="col-md-6 fv-plugins-icon-container">
                  <input
                    {...register("searchId", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Search Client"
                  />
                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div className="col-12">
                  <input
                    disabled={watchSearchId?.length < 2}
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {clients?.result?.length > 0 && (
          <>
            <hr className="my-3" />
            <div className="card">
              <h5 className="card-header">Clients</h5>
              <div
                className="table-responsive text-nowrap"
                style={{ minHeight: "200px" }}
              >
                <table className="table table-hover table-sm">
                  <thead>
                    <tr>
                      <th>User Id</th>

                      <th>Balance</th>
                      <th>Total Deposit</th>
                      <th>Total Withdraw</th>
                      <th>Exposure</th>
                      <th>Betting Status</th>
                      <th>Status</th>
                      <th>Reg. Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {clients?.result?.map((client, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <strong>{client?.userId}</strong>
                          </td>

                          <td>
                            <strong>{client?.balance}</strong>
                          </td>
                          <td>{client?.totalDeposit}</td>
                          <td>{client?.totalWithdraw}</td>
                          <td>
                            {" "}
                            {client?.exposure || client?.exposure == 0
                              ? Number(client.exposure).toFixed(0)
                              : client?.exposure}
                          </td>
                          <td>
                            <span
                              className={`badge  me-1 ${
                                client?.bettingStatus === 1
                                  ? "bg-label-primary"
                                  : "bg-label-danger"
                              }`}
                            >
                              {client?.bettingStatus === 1
                                ? "Active"
                                : "InActive"}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`badge  me-1 ${
                                client?.userStatus === 1
                                  ? "bg-label-primary"
                                  : "bg-label-danger"
                              }`}
                            >
                              {client?.userStatus === 1 ? "Active" : "InActive"}
                            </span>
                          </td>
                          <td>{client?.registrationDate}</td>
                          <td>
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() =>
                                handleOpenModal(
                                  setClientDeposit,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                )
                              }
                              className="btn btn-icon btn-sm btn-success"
                            >
                              D
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => {
                                handleOpenModal(
                                  setDirectWithdraw,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                );
                              }}
                              className="btn btn-icon btn-sm btn-danger"
                            >
                              W
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => handleNavigate(client)}
                              className="btn btn-icon btn-sm btn-warning"
                            >
                              PL
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => {
                                handleOpenModal(
                                  setShowChangePassword,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                );
                              }}
                              className="btn btn-icon btn-sm btn-info"
                            >
                              P
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => {
                                handleOpenModal(
                                  setShowChangeStatus,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                );
                              }}
                              className="btn btn-icon btn-sm btn-dark"
                            >
                              S
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => {
                                handleOpenModal(
                                  setShowCreditRef,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                );
                              }}
                              className="btn btn-icon btn-sm btn-primary"
                            >
                              CR
                            </a>
                            &nbsp;
                            <a
                              style={{
                                color: "white",
                              }}
                              onClick={() => {
                                handleOpenModal(
                                  setDirectDeposit,
                                  client?.username,
                                  client?.role,
                                  client?.downlineId
                                );
                              }}
                              className="btn btn-icon btn-sm btn-success"
                            >
                              DD
                            </a>
                            &nbsp;
                            <div className="btn-group">
                              <button
                                onClick={() => handleShowMore(i)}
                                style={{
                                  height: "auto",
                                  width: "auto",
                                  padding: "0px 2px",
                                }}
                                type="button"
                                className="btn btn-primary btn-icon  dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>

                              {i === showMore && (
                                <div
                                  style={{
                                    height: "100vh",
                                    width: "100vw",
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    zIndex: 999,
                                  }}
                                />
                              )}
                              {i === showMore && (
                                <ul
                                  ref={showMoreRef}
                                  style={{
                                    display: "block",
                                    right: "0px",
                                    top: "25px",
                                    zIndex: 9999,
                                  }}
                                  className="dropdown-menu dropdown-menu-end"
                                >
                                  <li>
                                    <Link
                                      to={`/activity-logs?role=${client?.role}&id=${client?.userId}`}
                                      className="dropdown-item"
                                    >
                                      Activity Logs
                                    </Link>
                                  </li>
                                  <li>
                                    <a className="dropdown-item">
                                      Another action
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {isSuccess && clients?.result?.length === 0 && (
          <div className="card">
            <h5 style={{ fontSize: "18px" }} className="card-header">
              No users found with given search query.
            </h5>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewClient;
