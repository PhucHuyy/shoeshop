import {
  Languages,
  LogOut,
  ScanQrCode,
  ShoppingBag,
  User,
  UserPen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderMenuItem from "./header-menu-item";

const data = {
  trigger: <User />,
  hasSubMenu: true,
  href: "#",
  subMenu: [
    {
      title: "Profile",
      href: "/account/profile",
      icon: UserPen,
    },
    {
      title: "Orders",
      href: "/account/orders",
      icon: ShoppingBag,
    },
    {
      title: "Log out",
      href: "/account/logout",
      icon: LogOut,
    },
  ],
};

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
      <HeaderMenuItem data={data} />
      {/* <User
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        onClick={() => navigate("/account/login")}
      /> */}
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
