// import { useEffect, useState } from "react";
// import axios from "axios";

// import ProductCard from "../Home/ProductCard";
// import toast from "react-hot-toast";

// const AllProduct = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8080/products?page=0&limit=4"
//         );

//         const prod = res.data.payload.products;

//         setProducts(prod);
//       } catch {
//         setProducts([]);
//         toast.error("Lỗi khi lấy dữ liệu sản phẩm");
//       }
//     };
//     fetchData();
//   }, []);

//   if (products.length === 0) {
//     return (
//       <div className="flex-1 flex items-center justify-center flex-col">
//         <img
//           src="/empty-product.png"
//           alt="No Product"
//           className="w-[192px] h-[192px]"
//         />
//         Hiện tại không có sản phẩm !!!
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-4 gap-5">
//       {products.map((item, index) => (
//         <ProductCard key={index} data={item} />
//       ))}
//     </div>
//   );
// };

// export default AllProduct;

import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../Home/ProductCard";
import toast from "react-hot-toast";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit] = useState(50); // số sản phẩm trên mỗi trang

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/products?page=${page}&limit=${limit}`
        );

        const { products: prod, total } = res.data.payload;

        setProducts(prod);
        setTotalProducts(total);
        // console.log(res.data.payload);
      } catch {
        setProducts([]);
        toast.error("Lỗi khi lấy dữ liệu sản phẩm");
      }
    };
    fetchData();
  }, [page, limit]);

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if ((page + 1) * limit < totalProducts) {
      setPage(page + 1);
    }
  };

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
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-5">
        {products.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      {totalProducts > limit && (
        <div className="flex items-center justify-center mt-5 space-x-3">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={handlePrevious}
            disabled={page === 0}
          >
            Previous
          </button>
          <span>
            Page {page + 1} of {Math.ceil(totalProducts / limit)}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={handleNext}
            disabled={(page + 1) * limit >= totalProducts}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
