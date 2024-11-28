import { ChevronDown, UserCog } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "../ui/sidebar";
import toast from "react-hot-toast";

const DetailInfoUser = () => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="">
            <div>
              <UserCog strokeWidth={1.5} />
            </div>
            <div className="text-lg font-bold pl-5 w-max">
              Tài khoản của tôi
            </div>
            <ChevronDown className="ml-3 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>

        <div className="space-y-3 pl-[45px]">
          <div
            className="cursor-pointer"
            onClick={() => toast.success("Hello")}
          >
            <CollapsibleContent>Hồ sơ</CollapsibleContent>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => toast.success("Hello")}
          >
            <CollapsibleContent>Địa chỉ</CollapsibleContent>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => toast.success("Hello")}
          >
            <CollapsibleContent>Đổi mật khẩu</CollapsibleContent>
          </div>
        </div>
      </SidebarGroup>
    </Collapsible>
  );
};

export default DetailInfoUser;
