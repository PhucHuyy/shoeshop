import { convertCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ data }) => {
  const { title, href, price } = data;

  const addToCart = () => {
    alert("Đã thêm vào giỏ cải");
  };

  return (
    <div className="flex flex-col gap-3 p-2 border-2 rounded-lg shadow hover:border-red-200">
      <div className="aspect-square">
        <img src={href} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="font-semibold cursor-pointer hover:text-red-400">
        {title}
      </div>
      <div className="mt-auto">
        {convertCurrency(price)}
        <ShoppingCart className="cursor-pointer" onClick={addToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
