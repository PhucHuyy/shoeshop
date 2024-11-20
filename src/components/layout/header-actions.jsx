import { Languages, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderActions = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[18%] flex items-center justify-evenly">
      <User
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        // onClick={() => navigate("/about")}
      />
      <ShoppingBag size={24} strokeWidth={1.5} className="cursor-pointer" />
      <Languages size={24} strokeWidth={1.5} />
    </div>
  );
};

export default HeaderActions;
