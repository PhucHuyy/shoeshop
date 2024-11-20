import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeaderMenuItem = ({ data }) => {
  const { trigger, hasSubMenu, href, subMenu } = data;

  if (!hasSubMenu) {
    return (
      <a
        href={href}
        className="cursor-pointer text-black hover:text-red-500 text-sm font-bold border border-transparent rounded-lg hover:border-red-300 hover:bg-red-50 py-1 px-2"
      >
        {trigger}
      </a>
    );
  }

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="cursor-pointer text-black hover:text-red-500 text-sm font-bold border border-transparent rounded-lg hover:border-red-300 hover:bg-red-50 py-1 px-2"
        >
          {trigger}
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-white border rounded-md w-[150px] p-1"
      >
        {subMenu.map((item, index) => (
          <div
            key={index}
            className="text-sm text-black font-semibold hover:bg-slate-100 hover:text-red-500 cursor-pointer h-[30px] rounded-sm flex items-center px-2"
            onClick={() => {}}
          >
            {item.title}
          </div>
        ))}
      </TooltipContent>
    </Tooltip>
  );
};

export default HeaderMenuItem;
