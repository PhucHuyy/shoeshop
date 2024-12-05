import axios from "axios";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search?name=${searchValue}&page=0&limit=12`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Khi nhấn Enter
      handleClick();
    }
  };

  return (
    <div className="flex flex-1 bg-white items-center border p-2">
      <input
        placeholder="Bạn đang tìm kiếm..."
        className="px-2 py-1 flex-1 outline-none"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyDown={handleKeyDown}
      />
      <Search className="text-black cursor-pointer" size={24} />
    </div>
  );
};

export default SearchBar;
