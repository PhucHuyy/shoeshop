import BreadCrumb from "@/components/Breadcrumb";

import DescShoeIC from "@/components/ShoeIC/desc-shoe-ic";
import ShopCategories from "@/components/Shop/shop-categories";
import AdidasShoeIC from "@/pageCategoryShoe/category-shoe-ic/adidas-shoe-ic";
import CategoryShoeIC from "@/pageCategoryShoe/category-shoe-ic/category-shoe-ic";
import DesporteShoeIC from "@/pageCategoryShoe/category-shoe-ic/desporte-shoe-ic";
import JomaShoeIC from "@/pageCategoryShoe/category-shoe-ic/joma-shoe-ic";
import KamitoShoeIC from "@/pageCategoryShoe/category-shoe-ic/kamito-shoe-ic";
import MizunoShoeIC from "@/pageCategoryShoe/category-shoe-ic/mizuno-shoe-ic";
import NikeShoeIC from "@/pageCategoryShoe/category-shoe-ic/nike-shoe-tf";
import PumaShoeIC from "@/pageCategoryShoe/category-shoe-ic/puma-shoe-tf";

import { useSearchParams } from "react-router-dom";

const ShoeIC = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand");

  let ProductComponent;
  switch (brand) {
    case "NIKE":
      ProductComponent = NikeShoeIC;
      break;
    case "PUMA":
      ProductComponent = PumaShoeIC;
      break;
    case "ADIDAS":
      ProductComponent = AdidasShoeIC;
      break;
    case "MIZUNO":
      ProductComponent = MizunoShoeIC;
      break;
    case "JOMA":
      ProductComponent = JomaShoeIC;
      break;
    case "KAMITO":
      ProductComponent = KamitoShoeIC;
      break;
    case "DESPORTE":
      ProductComponent = DesporteShoeIC;
      break;

    // Add more cases for other brands as needed
    default:
      ProductComponent = CategoryShoeIC;
  }

  return (
    <div className="space-y-5 px-5">
      <BreadCrumb type="shoeic" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescShoeIC />
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ShoeIC;
