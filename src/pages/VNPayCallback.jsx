import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VNPayCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("vnp_ResponseCode");
    const amount = queryParams.get("vnp_Amount");
    const orderInfo = queryParams.get("vnp_OrderInfo");

    if (status === "00") {
      console.log("Thanh toán thành công", { status, amount, orderInfo });
      navigate("/account/orders?status=success");
    } else if (status === "24") {
      console.log("Thanh toán bị huỷ");
      navigate("/account/orders?status=canceled");
    } else {
      console.log("Thanh toán thất bại");
      navigate("/account/orders?status=failed");
    }
  }, [location, navigate]);
  return <div>Đang xử lý ....</div>;
};

export default VNPayCallback;
