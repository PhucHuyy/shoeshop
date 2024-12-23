import { convertCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { name, thumbnail, price, id, discounted_price, is_sale } = data;
  // console.log(data);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-3 p-2 border-2 rounded-lg shadow hover:border-red-200 cursor-pointer"
      onClick={() => navigate("/product/" + id)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={`http://localhost:8080/products/images/` + thumbnail}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="font-semibold cursor-pointer hover:text-red-400">
        {name}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex space-x-4 items-center">
          {is_sale ? (
            <>
              <span className="text-red-500 text-xl font-bold">
                {discounted_price.toLocaleString()}
              </span>
              <span className="text-black-200 text-lg font-bold line-through">
                {price.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-red-500 text-xl font-bold">
              {price.toLocaleString()}
            </span>
          )}
        </div>
        <button className="hover:text-red-400 active:text-red-600">
          <ShoppingCart className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
