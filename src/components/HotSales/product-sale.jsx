import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import ProductCard from "../Home/ProductCard";

const ProductSale = () => {
  const [productSale, setProductSale] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/products/Sale?page=0&limit=20&is_sale=true"
        );

        const prod = res.data.payload.products;

        setProductSale(prod);
      } catch {
        setProductSale([]);
        toast.error("Lỗi khi lấy dữ liệu sản phẩm");
      }
    };
    fetchData();
  }, []);

  if (productSale.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col">
        <img
          src="/empty-product.png"
          alt="No Product"
          className="w-[192px] h-[192px]"
        />
        Hiện tại không có sản phẩm!!!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {productSale.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ProductSale;
