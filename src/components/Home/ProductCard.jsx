import { convertCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { name, thumnail, price, id } = data;
  // console.log(data);
  console.log(thumnail);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-3 p-2 border-2 rounded-lg shadow hover:border-red-200 cursor-pointer"
      onClick={() => navigate("/product/" + id)}
    >
      <div className="aspect-square">
        <img src={thumnail} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="font-semibold cursor-pointer hover:text-red-400">
        {name}
      </div>
      <div className="mt-auto flex items-center justify-between">
        {convertCurrency(price)}
        <button className="hover:text-red-400 active:text-red-600">
          <ShoppingCart className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
