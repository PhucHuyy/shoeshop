import { Languages, ShoppingBag, User } from "lucide-react";

const HeaderActions = () => {
  return (
    <div className="w-[18%] flex items-center justify-evenly">
      <User size={24} strokeWidth={1.5} />
      <ShoppingBag size={24} strokeWidth={1.5} />
      <Languages size={24} strokeWidth={1.5} />
    </div>
  );
};

export default HeaderActions;
