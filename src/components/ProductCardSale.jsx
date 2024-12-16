import { convertCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

const ProductCardSale = () => {
  const dataFake = [
    {
      id: 1,
      name: "Áo thun nam",
      thumbnail: "ao-thun-nam.jpg",
      initalPrice: 150000,
      salePrice: 120000,
    },
    {
      id: 2,
      name: "Áo thun nữ",
      thumbnail: "ao-thun-nu.jpg",
      initalPrice: 150000,
      salePrice: 120000,
    },
    {
      id: 3,
      name: "Áo thun nữ",
      thumbnail: "ao-thun-nu.jpg",
      initalPrice: 150000,
      salePrice: 120000,
    },
    {
      id: 4,
      name: "Áo thun nữ",
      thumbnail: "ao-thun-nu.jpg",
      initalPrice: 150000,
      salePrice: 120000,
    },
    // Thêm sản phẩm khác nếu cần
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {dataFake.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-3 p-2 border-2 rounded-lg shadow hover:border-red-200 cursor-pointer"
          // onClick={() => navigate("/product/" + product.id)}
        >
          <div className="aspect-square">
            <img
              src={`http://localhost:8080/products/images/` + product.thumbnail}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-semibold cursor-pointer hover:text-red-400">
            {product.name}
          </div>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex space-x-4 items-center">
              <span className="text-red-500 font-bold text-xl">
                {convertCurrency(product.salePrice)}
              </span>
              <span className="text-gray-500 line-through">
                {convertCurrency(product.initalPrice)}
              </span>
            </div>
            <button className="hover:text-red-400 active:text-red-600">
              <ShoppingCart className="cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSale;
