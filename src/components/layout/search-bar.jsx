import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-1 bg-white items-center border p-2">
      <input
        placeholder="Bạn đang tìm kiếm..."
        className="px-2 py-1 flex-1 outline-none"
      />
      <Search className="text-black cursor-pointer" size={24} />
    </div>
  );
};

export default SearchBar;
