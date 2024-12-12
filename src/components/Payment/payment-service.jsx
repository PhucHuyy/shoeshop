import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = "http://localhost:8080/payment";

export const createVnPayPayment = async (orderData, totalMoney) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/vn-pay?amount=${totalMoney}`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return res.data;
  } catch {
    toast.error("Tạo đơn hàng thất bại");
    return null;
  }
  // console.log(`${API_BASE_URL}/vn-pay?amount=${totalMoney}`);
  // console.log(orderData);
};

export const handleVnPayCallback = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/vn-pay/callback`);
    return res.payload;
  } catch {
    toast.error("Xử lý callback thất bại");
  }
};
