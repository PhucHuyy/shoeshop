import { useState } from "react";
import toast from "react-hot-toast";

const InformationProduct = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [total, setTotal] = useState(13750000); // Tổng cộng ban đầu

  const products = [
    {
      id: 1,
      name: "NIKE PHANTOM GX 2 PRO TF - FJ2583-003 - XÁM/XANH CHUỐI",
      price: 2750000,
      quantity: 1,
      imageUrl: "path_to_image_1", // Đường dẫn hình ảnh sản phẩm
    },
    {
      id: 2,
      name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF - FQ8687-400 - XANH LƠ",
      price: 2750000,
      quantity: 1,
      imageUrl: "path_to_image_2",
    },
    {
      id: 3,
      name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF - FQ8687-400 - XANH LƠ",
      price: 8250000,
      quantity: 1,
      imageUrl: "path_to_image_3",
    },
  ];

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    // Giả sử mã giảm giá giảm 10%
    if (discountCode === "DISCOUNT10") {
      setTotal(total * 0.9); // Giảm 10%
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-16 h-16 object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">
                {product.quantity} x {product.price.toLocaleString()}₫
              </p>
            </div>
          </div>
        ))}

        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Mã giảm giá"
            value={discountCode}
            onChange={handleDiscountChange}
            className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => toast.error("Mã giảm giá không hợp lệ")}
            className="w-1/4 ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sử dụng
          </button>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="text-sm font-medium">Tạm tính</span>
          <span className="text-sm">{total.toLocaleString()}₫</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Phí vận chuyển</span>
          <span className="text-sm">--</span>
        </div>

        <div className="mt-6 flex justify-between text-lg font-bold">
          <span>Tổng cộng</span>
          <span>{total.toLocaleString()}₫</span>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
