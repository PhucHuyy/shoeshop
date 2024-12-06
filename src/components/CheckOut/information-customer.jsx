import { User } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const InfomationCustomer = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-5xl w-[600px] mx-auto bg-white border border-gray-300 rounded-md">
      <div className="text-2xl font-semibold">GIÀY BÓNG ĐÁ CHÍNH HÃNG</div>
      <div className="mb-4">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium text-gray-700"
        >
          Thêm địa chỉ mới...
        </label>
        <input
          type="text"
          id="postal-code"
          value="70000, Vietnam"
          readOnly
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <div className="mt-2">
          <textarea
            placeholder="Địa chỉ"
            rows="2"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <input
            type="text"
            placeholder="Quốc gia"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Tỉnh / thành"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Quận / huyện"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phường / xã"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="text-blue-500 text-sm"
          onClick={() => navigate("/shoppingcart")}
        >
          Giỏ hàng
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => toast.success("Chức năng sẽ được hoàn thiện sau")}
        >
          Tiếp tục đến phương thức thanh toán
        </button>
      </div>
    </div>
  );
};

export default InfomationCustomer;
