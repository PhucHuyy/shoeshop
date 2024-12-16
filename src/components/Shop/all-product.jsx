import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../Home/ProductCard";
import toast from "react-hot-toast";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/products?page=0&limit=20"
        );

        const prod = res.data.payload.products;

        setProducts(prod);
      } catch {
        setProducts([]);
        toast.error("Lỗi khi lấy dữ liệu sản phẩm");
      }
    };
    fetchData();
  }, []);

  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col">
        <img
          src="/empty-product.png"
          alt="No Product"
          className="w-[192px] h-[192px]"
        />
        Hiện tại không có sản phẩm, nhót !!!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </div>
  );
};

export default AllProduct;
