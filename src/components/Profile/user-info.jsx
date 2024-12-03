import { useShoeContext } from "@/context/ShoeContext";
import axios from "axios";
import { CircleUser } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { token, removeToken } = useShoeContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/users/my-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(res.data.payload.fullname);
      } catch {
        toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
        removeToken();
        navigate("/account/login");
      }
    };
    fetchData();
  }, [token, navigate, removeToken]);

  return (
    <div className="flex items-center space-x-5">
      <CircleUser strokeWidth={1.25} />
      <div className="font-bold underline cursor-pointer">{username}</div>
    </div>
  );
};

export default UserInfo;
