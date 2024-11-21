import { Languages, ScanQrCode, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderActions = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[18%] flex items-center justify-evenly">
      <ScanQrCode
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        onClick={"/"}
      />
      <User
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        onClick={() => navigate("/account/login")}
      />
      <ShoppingBag
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        onClick={() => navigate("/shoppingcart")}
      />
      <Languages size={24} strokeWidth={1.5} />
    </div>
  );
};

export default HeaderActions;
