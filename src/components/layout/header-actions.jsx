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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useShoeContext } from "@/context/ShoeContext";
import toast from "react-hot-toast";

const data = {
  trigger: <User />,
  hasSubMenu: true,
  href: "#",
  subMenu: [
    {
      title: "Profile",
      subHref: "/account/profile",
      icon: UserPen,
      requiresAuth: true,
    },
    {
      title: "Orders",
      subHref: "/account/orders",
      icon: ShoppingBag,
      requiresAuth: true,
    },
    {
      title: "Log in",
      subHref: "/account/login",
      icon: LogIn,
      requiresAuth: false,
    },
    {
      title: "Log out",
      subHref: "/account/login",
      icon: LogOut,
      requiresAuth: true,
    },
  ],
};

const HeaderActions = () => {
  const { token } = useShoeContext();

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0]; // Lấy file đầu tiên được chọn
    if (!file) {
      toast.error("Không có file nào được chọn");
      return;
    }

    // Tạo form data để gửi file
    const formData = new FormData();
    formData.append("image", file);
    let toastID; // Khai báo ngoài để quản lý toast

    try {
      // Hiển thị toast loading và lưu ID
      toastID = toast.loading("Đang thực hiện tìm kiếm, vui lòng chờ ...");

      // Gửi request POST đến server
      const response = await axios.post(
        "http://localhost:3000/search",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Cần để thông báo cho server rằng dữ liệu là dạng form
          },
        }
      );

      // Nếu thành công, xóa toast loading và hiển thị toast success
      if (response.status === 200) {
        toast.dismiss(toastID); // Xóa toast loading
        const encoded = encodeURIComponent(response.data.result);
        navigate(`/search?name=${encoded}&page=0&limit=12`);
        toast.success("Tìm kiếm thành công!", {
          autoClose: 3000, // Tự động đóng sau 3 giây
        });
      }
    } catch (error) {
      // Nếu có lỗi, xóa toast loading và hiển thị toast error
      if (toastID) {
        toast.dismiss(toastID); // Xóa toast loading
      }
      toast.error("Xảy ra lỗi trong quá trình tải file!", {
        autoClose: 3000, // Tự động đóng sau 3 giây
      });
    }
  };

  return (
    <div className="w-[18%] flex items-center justify-evenly">
      <ScanQrCode
        size={24}
        strokeWidth={1.5}
        className="cursor-pointer"
        // onClick={"/"}
        onClick={handleButtonClick}
      />
      <input
        type="file"
        accept="image/*" // Chỉ cho phép chọn file ảnh
        ref={fileInputRef}
        style={{ display: "none" }} // Ẩn input
        onChange={handleFileChange} // Xử lý khi file được chọn
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
