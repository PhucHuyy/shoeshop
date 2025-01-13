import ProductCard from "@/components/Home/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái đang tải

  const { name, page, limit } = Object.fromEntries(params);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:8080/products/search?name=${name}&page=${page}&limit=${limit}`
        );
        setProducts(res.data.payload.products);
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name, page, limit]);

  return (
    <div className="space-y-10 px-24 pt-10">
      <div className="text-3xl font-bold">
        Kết quả tìm kiếm: &quot;{name}&quot;
      </div>

      {loading ? (
        <div className="text-center text-lg">Đang tải...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-4 gap-5 ">
          {products.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg text-gray-600">
          Không tìm thấy sản phẩm phù hợp
        </div>
      )}
    </div>
  );
};

export default Search;
