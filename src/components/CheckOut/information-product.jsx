import { useShoeContext } from "@/context/ShoeContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const InformationProduct = () => {
  const [discountCode, setDiscountCode] = useState("");
  const navigate = useNavigate();
  // const [total, setTotal] = useState(13750000); // Tổng cộng ban đầu

  const { checkoutProduct } = useShoeContext();

  const total = checkoutProduct.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    // Nếu không có sản phẩm trong checkoutProduct, chuyển về trang trước
    if (checkoutProduct.length === 0) {
      navigate(-1); // Quay lại trang trước đó
    }
  }, [checkoutProduct, navigate]);

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  // const applyDiscount = () => {
  //   // Giả sử mã giảm giá giảm 10%
  //   if (discountCode === "DISCOUNT10") {
  //     setTotal(total * 0.9); // Giảm 10%
  //   }
  // };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="space-y-4">
        {checkoutProduct.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={`http://localhost:8080/products/images/${item.imageUrl}`}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.quantity} x {item.price.toLocaleString()}₫
              </p>
              <div className="text-sm text-gray-600">Size: {item.size}</div>
            </div>
            <div className="flex">
              <div className="text-sm text-gray-600">
                {(item.quantity * item.price).toLocaleString()}₫
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Mã giảm giá"
            value={discountCode}
            onChange={handleDiscountChange}
            className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            variant="checkout"
            onClick={() => toast.error("Mã giảm giá không hợp lệ")}
            className="w-1/4 ml-2 p-2 rounded-md"
            size="lg"
          >
            Sử dụng
          </Button>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="text-sm font-medium">Tạm tính</span>
          <span className="text-sm">{total.toLocaleString()}₫</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Phí vận chuyển</span>
          <span className="text-sm">--</span>
        </div>

        <div className="mt-6 flex justify-between text-lg font-bold text-rose-600">
          <span>Tổng cộng</span>
          <span>{total.toLocaleString()}₫</span>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
