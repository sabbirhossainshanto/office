import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useGetIndex, useIndex } from "../../hooks";
import { LiaTrashAlt } from "react-icons/lia";

const ViewBanner = () => {
  const { mutate: deleteBanner } = useIndex();
  const { data, refetch } = useGetIndex({
    type: "viewBanners",
  });

  const handleDeleteBanner = async (eventId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const payload = {
          eventId,
          type: "deleteBanner",
        };
        deleteBanner(payload, {
          onSuccess: (data) => {
            if (data?.success) {
              refetch();
              toast.success(data?.result?.message);
            } else {
              toast.error(data?.error?.status?.[0]?.description);
            }
          },
        });
      }
    });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Banners</h5>
        <div className="table-responsive text-nowrap">
          <table className="table table-hover table-sm">
            <thead className="table-dark">
              <tr>
                <th>Banner</th>
                <th>Event Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {data?.result?.map((banner, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <a>
                        <img src={banner?.image_path} width="500px" />
                      </a>
                    </td>
                    <td>{banner?.event_id}</td>

                    <td>
                      <a
                        onClick={() => handleDeleteBanner(banner?.event_id)}
                        style={{ color: "white" }}
                        className="btn btn-icon btn-sm btn-danger"
                      >
                        <LiaTrashAlt size={25} />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewBanner;
