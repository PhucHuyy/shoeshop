import { ChevronsUpDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const CategoryItem = ({ data }) => {
  const { title, content } = data;
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <button className=" w-full flex items-center cursor-pointer justify-between bg-white border-2 border-b-0 border-slate-300 px-3 py-1 rounded-sm">
          <div className="font-semibold">{title}</div>
          <ChevronsUpDown className="h-4 w-4" />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-2 border-t-0 border-slate-300 px-3 py-2 space-y-2 rounded-b-md">
        {content.map((label, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={label} />
            <Label htmlFor={label} className="cursor-pointer">
              {label}
            </Label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CategoryItem;
