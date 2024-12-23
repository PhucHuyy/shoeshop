import { useNavigate } from "react-router-dom";
import HeaderActions from "./header-actions";
import HeaderMenu from "./header-menu";
import SearchBar from "./search-bar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <div className="h-header flex items-center justify-between w-full gap-10">
        <div className="w-[20%] h-full bg-white">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <SearchBar />
        <HeaderActions />
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
