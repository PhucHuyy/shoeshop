import CartItem from "@/components/ShoppingCart/cart-item";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setProductData(res.data);
      // console.log(res.data);
    } catch {
      toast.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!productData) {
    return (
      <div className="flex w-full items-center justify-center mt-[250px] text-gray-400">
        <LoaderCircle size={128} strokeWidth={2} className="animate-spin" />
      </div>
    );
  }

  const deleteCartItem = async (cartItemId) => {
    try {
      await axios.delete(
        `http://localhost:8080/cart?cartItemId=${cartItemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // setProduct((prevItems) => {
      //   prevItems.filter((productData) => productData.id !== cartItemId);
      // });
      await fetchData();
    } catch {
      toast.error("Lỗi khi xóa sản phẩm");
    }
  };

  const totalPrice = productData
    .map((item) => item.total_rice)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        {/* Tiêu đề */}
        <div className="grid grid-cols-5 text-center font-bold border-b pb-4 mb-4">
          <h2>Sản phẩm</h2>
          <h2>Đơn giá</h2>
          <h2>Số lượng</h2>
          <h2>Thành tiền</h2>
          <h2>Huỷ sản phẩm</h2>
        </div>

        {/* Sản phẩm */}

        {productData.map((item, index) => (
          <CartItem key={index} item={item} onDelete={deleteCartItem} />
        ))}

        {/* Tổng cộng */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold">Thành tiền</p>
          <p className="text-lg font-bold text-red-600">
            {totalPrice.toLocaleString()} đ
          </p>
        </div>

        {/* Nút thanh toán */}
        <div className="mt-6 text-right">
          <button className="px-6 py-2 bg-black text-white rounded">
            Thanh toán
          </button>
        </div>
      </div>

      {/* Nút tiếp tục mua sắm */}
      <div className="mt-4">
        <button
          className="text-sm text-blue-600"
          onClick={() => navigate("/collections/shop")}
        >
          &lt; Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
