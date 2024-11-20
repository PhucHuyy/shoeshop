import { headerMenu } from "@/lib/data";
import HeaderMenuItem from "./header-menu-item";

const HeaderMenu = () => {
  return (
    <div className="flex items-center px-10 justify-between mb-3">
      {headerMenu.map((item, index) => (
        <HeaderMenuItem key={index} data={item} />
      ))}
    </div>
  );
};

export default HeaderMenu;
