import axios from "axios";
import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useShoeContext } from "@/context/ShoeContext";
import { useNavigate } from "react-router-dom";

const DetailProductInfo = ({ productData }) => {
  const navigate = useNavigate();

  const allSize = [...productData.sizes].sort((a, b) => {
    return a.size - b.size;
  });

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    product_id: productData.id,
    size: allSize[0].size,
    quantity: 1,
  });

  const handleDecrease = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: Math.max(prev.quantity - 1, 1), // Đảm bảo không nhỏ hơn 1
    }));
  };

  const handleIncrease = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const handleSize = (size) => {
    setProduct((prev) => ({
      ...prev,
      size,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post(
        "http://localhost:8080/cart",
        {
          ...product,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Thêm vào giỏ hàng thành công");
      setProduct({
        product_id: productData.id,
        size: allSize[0].size,
        quantity: 1,
      });
    } catch (error) {
      console.log(error);

      toast.error("Xảy ra lỗi, thử lại!!!");
    } finally {
      setLoading(false);
    }
  };

  const { startCheckout } = useShoeContext();

  const handleCheckout = () => {
    startCheckout([
      {
        size: product.size,
        quantity: product.quantity,
        name: productData.name,
        price: productData.price,
        imageUrl: productData.product_images[0].imageUrl,
        product_id: productData.id,
      },
    ]);
    navigate("/checkouts");
  };

  return (
    <div className="flex gap-14 p-6 w-[70%] items-center justify-between">
      {/* Hiển thị hình ảnh chính */}
      <div className="w-[407px] h-[407px] ">
        <img
          src={"http://localhost:8080/products/images/" + productData.thumbnail} // Lấy hình ảnh từ trường `image`
          alt={productData.name}
          className="w-full h-full object-cover  border border-gray-300"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex-1">
        <h2 className="text-xl font-bold">{productData.name}</h2>
        <p className="text-sm text-gray-500">
          Loại: {productData.category_id} | Mã SP: {productData.id}
        </p>
        <div className="mt-4">
          <span className="text-red-500 text-2xl font-bold">
            {productData.price.toLocaleString()}
          </span>
          {/* <span className="line-through text-gray-500 ml-4">
            {productData.originalPrice.toLocaleString()}₫
          </span>
          <span className="text-green-500 ml-4">
            (Tiết kiệm {productData.discount.toLocaleString()}₫)
          </span> */}
        </div>

        {/* Thông tin thanh toán
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Trả sau đến 12 tháng với{" "}
            <span className="text-blue-500">Fundiin</span>
          </p>
        </div> */}

        {/* Lựa chọn kích thước */}
        <div className="mt-4">
          <p className="font-semibold">Kích thước</p>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {productData.sizes.length === 0
              ? "Đéo có size"
              : allSize.map((item) => (
                  <button
                    key={item.id}
                    className={`px-4 py-2 border ${
                      item.size === product.size
                        ? "border-red-300"
                        : "border-gray-300"
                    } hover:border-red-300 rounded-xl `}
                    onClick={() => handleSize(item.size)}
                  >
                    {item.size}
                  </button>
                ))}
          </div>
        </div>

        {/* Chọn số lượng */}
        <div className="flex justify-between items-center mt-6">
          <p className="font-semibold mr-4">Số lượng:</p>
          <button
            className="px-4 py-2 border border-gray-300"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="px-4 py-2">{product.quantity}</span>
          <button
            className="px-4 py-2 border border-gray-300"
            onClick={handleIncrease}
          >
            +
          </button>
          <Button
            variant="custom"
            size="custom"
            onClick={handleSubmit}
            disabled={loading}
          >
            Thêm vào giỏ
          </Button>
        </div>

        {/* Nút hành động */}
        <div className="flex gap-4 mt-6">
          <button
            className="bg-black w-full text-white px-6 py-3 rounded"
            onClick={handleCheckout}
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProductInfo;
