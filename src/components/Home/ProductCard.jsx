import { convertCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

const ProductCard = ({ data }) => {
  const { title, href, price } = data;

  const addToCart = () => {
    toast.success("Đã thêm vào giỏ cải");
  };

  return (
    <div className="flex flex-col gap-3 p-2 border-2 rounded-lg shadow hover:border-red-200">
      <div className="aspect-square">
        <img src={href} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="font-semibold cursor-pointer hover:text-red-400">
        {title}
      </div>
      <div className="mt-auto flex items-center justify-between">
        {convertCurrency(price)}
        <button
          onClick={addToCart}
          className="hover:text-red-400 active:text-red-600"
        >
          <ShoppingCart className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
