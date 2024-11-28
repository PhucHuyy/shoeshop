import { CircleUser } from "lucide-react";
import toast from "react-hot-toast";

const UserInfo = () => {
  return (
    <div className="flex items-center space-x-5">
      <CircleUser strokeWidth={1.25} />
      <div className="font-bold underline cursor-pointer">Nguyễn Văn A</div>
    </div>
  );
};

export default UserInfo;
