import ProductCard from "@/components/Home/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params] = useSearchParams();
  const [products, setproducts] = useState([]);

  const { name, page, limit } = Object.fromEntries(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/products/search?name=${name}&page=${page}&limit=${limit}`
        );

        setproducts(res.data.payload.products);
      } catch {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, [name, page, limit]);
  console.log(products);

  return (
    <div className="space-y-10 px-24 pt-10">
      <div className="text-3xl font-bold">
        Kết quả tìm kiếm: &quot;{name}&quot;
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        {products.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Search;
