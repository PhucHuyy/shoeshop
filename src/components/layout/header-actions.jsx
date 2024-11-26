import {
  Languages,
  LogIn,
  LogOut,
  ScanQrCode,
  ShoppingBag,
  User,
  UserPen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderMenuItem from "./header-menu-item";
import { useEffect, useState } from "react";
import axios from "axios";
import { useShoeContext } from "@/context/ShoeContext";

const data = {
  trigger: <User />,
  hasSubMenu: true,
  href: "/account/login",
  subMenu: [
    {
      title: "Profile",
      href: "/account/profile",
      icon: UserPen,
      requiresAuth: true,
    },
    {
      title: "Orders",
      href: "/account/orders",
      icon: ShoppingBag,
      requiresAuth: true,
    },
    {
      title: "Log in",
      href: "/account/login",
      icon: LogIn,
      requiresAuth: false,
    },
    {
      title: "Log out",
      href: "/account/login",
      icon: LogOut,
      requiresAuth: true,
    },
  ],
};

const HeaderActions = () => {
  const { token } = useShoeContext();

  const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   // if (!token) {
  //   //   navigate("/account/login");
  //   //   return;
  //   // }

  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8080/users/my-info", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       const user = res.data.payload;
  //       setUser(user);
  //     } catch {
  //       localStorage.removeItem("token");
  //       navigate("/account/login");
  //     }
  //   };

  //   fetchUser();
  // }, [navigate]);

  return (
    <div className="w-[18%] flex items-center justify-evenly">
      <ScanQrCode
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        onClick={"/"}
      />
      <HeaderMenuItem data={data} loggedIn={token != ""} />
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
