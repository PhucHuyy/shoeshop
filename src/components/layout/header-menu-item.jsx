import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useShoeContext } from "@/context/ShoeContext";
import { Link, useNavigate } from "react-router-dom";

const HeaderMenuItem = ({ data, loggedIn }) => {
  const { removeToken } = useShoeContext();

  const navigate = useNavigate();

  const { trigger, hasSubMenu, href, subMenu } = data;

  if (!hasSubMenu) {
    return (
      <Link
        to={href}
        className={`cursor-pointer text-black hover:text-red-500 text-sm font-bold border border-transparent rounded-lg hover:border-red-300 hover:bg-red-50 py-1 px-2 ${
          trigger === "HOT SALES" ? " animate-flame animate-flicker" : ""
        }`}
      >
        {trigger}
      </Link>
    );
  }

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={`cursor-pointer text-black hover:text-red-500 text-sm font-bold border border-transparent rounded-lg hover:border-red-300 hover:bg-red-50 py-1 px-2 
          `}
        >
          {trigger}
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-white border rounded-md w-[150px] p-1"
      >
        {subMenu.map((item, index) => {
          const Icon = item.icon;
          const requiresAuth = item.requiresAuth;

          if (requiresAuth != loggedIn) {
            return;
          }

          return (
            <button
              key={index}
              className="w-full justify-evenly text-sm text-black font-semibold hover:bg-slate-100 hover:text-red-500 cursor-pointer h-[30px] rounded-sm flex items-center px-2"
              onClick={() => {
                if (item.title === "Log out") {
                  removeToken();
                }
                navigate(item.subHref);
              }}
            >
              <p>{item.title}</p>
              {item.icon && <Icon className="text-inherit" size={18} />}
            </button>
          );
        })}
      </TooltipContent>
    </Tooltip>
  );
};

export default HeaderMenuItem;
