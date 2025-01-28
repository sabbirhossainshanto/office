import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa";
import { useGetIndex, useIndex } from "../../hooks";
import { API } from "../../api";
import axios from "axios";

const AddBanner = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [filePath, setFilePath] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refetch } = useGetIndex({ type: "viewBanners" });
  const { mutate: addBanner } = useIndex();

  /* Upload image */
  useEffect(() => {
    if (image) {
      setLoading(true);
      const handleSubmitImage = async () => {
        const formData = new FormData();
        formData.append("image", image);
        const res = await axios.post(API.up, formData);
        const data = res.data;
        setLoading(false);
        if (data?.success) {
          setFilePath(data?.filePath);
        }
      };
      handleSubmitImage();
    }
  }, [image]);

  const onSubmit = async ({ eventId }) => {
    const payload = {
      eventId,
      bannerLink: filePath,
      type: "addBanner",
    };

    addBanner(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
          reset();
          navigate("/view-banners");
        } else {
          toast.error(data?.error?.status?.[0]?.description);
        }
      },
    });
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 breadcrumb-wrapper mb-4">
        <span className="text-muted fw-light">Home /</span> Add Banner
      </h4>

      <div className="row">
        <div className="col-xxl">
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3" id="bank_account_number_div">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="basic-default-company"
                  >
                    Event ID
                  </label>
                  <div className="col-sm-10">
                    <input
                      {...register("eventId", {
                        required: true,
                      })}
                      type="number"
                      className="form-control"
                      id="basic-default-company"
                      placeholder=""
                    />
                  </div>
                </div>
                {!loading && !filePath && (
                  <div className="row mb-3" id="bank_account_name_div">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      Banner Image (1350px * 583px)
                    </label>
                    <div className="col-sm-10">
                      <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        name="banner_link"
                        className="form-control"
                        required
                        id="basic-default-name"
                      />
                    </div>
                  </div>
                )}

                {!loading && filePath && (
                  <div className="row mb-3">
                    <span
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      <RxCross2
                        onClick={() => setFilePath("")}
                        size={30}
                        cursor="pointer"
                      />
                    </span>
                    <div className="col-sm-10">
                      <img
                        style={{ height: "200px", objectFit: "contain" }}
                        className="form-control"
                        src={filePath}
                        alt=""
                      />
                    </div>
                  </div>
                )}
                {loading && (
                  <div className="row mb-3" id="qr_code">
                    <span
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-company"
                    >
                      {" "}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                      className="col-sm-10"
                    >
                      <FaSpinner size={30} className="animate-spin" />
                    </div>
                  </div>
                )}

                <div className="row justify-content-end">
                  <div className="col-sm-10">
                    <input
                      disabled={!filePath}
                      type="submit"
                      name="submit"
                      value="Submit"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
