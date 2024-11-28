import { Bell, Coins, ListOrdered, TicketPercent } from "lucide-react";
import DetailInfoUser from "./detail-info-user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserInfo from "./user-info";

const TaskbarProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-6">
      <UserInfo />
      <div>
        <DetailInfoUser />
        <div
          className="flex  cursor-pointer"
          onClick={() => navigate("/account/orders")}
        >
          <div>
            <ListOrdered strokeWidth={1.5} className="text-blue-500" />
          </div>
          <div className="pl-5">Đơn mua</div>

          <br />
          <br />
        </div>

        {/* thêm những demo tĩnh */}
        <div className="flex flex-col  space-y-[20px]">
          <div className="flex">
            <div>
              <Bell strokeWidth={1.5} className="text-red-500" />
            </div>
            <div className="pl-5">Thông báo</div>
          </div>
          <div className="flex">
            <div>
              <TicketPercent strokeWidth={1.5} className="text-red-500" />
            </div>
            <div className="pl-5">Kho Voucher</div>
          </div>
          <div className="flex">
            <div>
              <Coins strokeWidth={1.5} className="text-yellow-400" />
            </div>
            <div className="pl-5">NPC xu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskbarProfile;
