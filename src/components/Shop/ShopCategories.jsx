import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import CategoryItem from "./CategoryItem";

const data = [
  {
    title: "Giá",
    content: [
      "Tất cả",
      "Dưới 1,000,000đ",
      "2,000,000₫- 3,000,000₫",
      "3,000,000₫- 4,000,000₫",
      "Trên 4,000,000đ",
    ],
  },
  {
    title: "Thương hiệu",
    content: ["ADIDAS", "MIZUNO", "PUMA", "ATHLETA", "KELME", "ASICS", "NIKE"],
  },
  {
    title: "Size",
    content: [37, 38, 39, 40],
  },
];

const ShopCategories = () => {
  return (
    <div className="w-[20%] space-y-2">
      <Collapsible>
        <CollapsibleTrigger asChild>
          <button className=" w-full flex items-center cursor-pointer justify-between bg-white border-2 border-b-0 border-slate-300 px-3 py-1 rounded-sm">
            <div className="font-semibold">Danh mục</div>
            <ChevronsUpDown className="h-4 w-4" />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-2 border-t-0 border-slate-300 px-3 py-2 space-y-2 rounded-b-md">
          <button className="border border-slate-500 px-2 w-max rounded-md">
            Nike
          </button>
          <button className="border border-slate-500 px-2 w-max rounded-md">
            Adidas
          </button>
          <button className="border border-slate-500 px-2 w-max rounded-md">
            Mizuno
          </button>
        </CollapsibleContent>
      </Collapsible>
      {data.map((item, index) => (
        <CategoryItem key={index} data={item} />
      ))}
    </div>
  );
};

export default ShopCategories;
