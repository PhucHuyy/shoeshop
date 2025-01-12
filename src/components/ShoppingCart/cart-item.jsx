import { convertCurrency } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CartItem = (props) => {
  const productData = props.item;
  const onDelete = props.onDelete;

  const [loading, setLoading] = useState(false);

  const handleIncrease = async () => {
    try {
      setLoading(true);
      await axios.post(
        "http://localhost:8080/cart",
        {
          product_id: productData.product_id.id,
          size: productData.size,
          color: productData.color,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch {
      toast.error("Xảy ra lỗi, thử lại!!!");
    } finally {
      setLoading(false);
      await props.fetchData();
    }
  };

  const handleDecrease = async () => {
    if (productData.quantity === 1) {
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:8080/cart",
        {
          product_id: productData.product_id.id,
          size: productData.size,
          color: productData.color,
          quantity: -1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch {
      toast.error("Xảy ra lỗi, thử lại!!!");
    } finally {
      setLoading(false);
      await props.fetchData();
    }
  };

  return (
    <div className="grid grid-cols-5 items-center text-center border-b py-4">
      <div className="flex items-center gap-5">
        <img
          src={
            `http://localhost:8080/products/images/` +
            productData.product_id.thumbnail
          }
          alt="Sản phẩm"
          className="w-20 h-20 object-cover"
        />
        <div className="text-left">
          <h3 className="text-sm font-medium">{productData.product_id.name}</h3>
          <p className="text-gray-500 text-sm">
            Mã SP: {productData.product_id.id}
          </p>
          <p className="text-gray-500 text-sm">Size: {productData.size}</p>
          <p className="text-gray-500 text-sm">Màu: {productData.color}</p>
        </div>
      </div>

      <p className="text-sm font-medium">
        {convertCurrency(productData.unit_price)}
      </p>

      <div className="flex items-center justify-center gap-2">
        <button
          className="p-2 border rounded"
          onClick={handleDecrease}
          disabled={loading}
        >
          -
        </button>
        <input
          type="text"
          value={productData.quantity}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button
          className="p-2 border rounded"
          onClick={handleIncrease}
          disabled={loading}
        >
          +
        </button>
      </div>

      <p className="text-sm font-medium">
        {convertCurrency(productData.total_rice)}
      </p>

      <button
        className="text-red-500 font-bold"
        onClick={() => onDelete(productData.id)}
        disabled={loading}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
