import ProductCard from "@/components/Home/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const KamitoShoeIC = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/products/categories/5/brands/7?page=0&limit=50"
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
        Hiện tại không có sản phẩm !!!
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

export default KamitoShoeIC;
