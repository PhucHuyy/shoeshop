import DescAccessory from "@/components/Accessory/desc-accessory";
import BreadCrumb from "@/components/Breadcrumb";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";
import AccessoryOfficial from "@/pageCategoryShoe/category-accessory/accessory-official";
import Bag from "@/pageCategoryShoe/category-accessory/bag";
import Ball from "@/pageCategoryShoe/category-accessory/ball";
import Insole from "@/pageCategoryShoe/category-accessory/insole";
import Socks from "@/pageCategoryShoe/category-accessory/socks";
import { useSearchParams } from "react-router-dom";

const Accessory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  let ProductComponent;
  switch (category) {
    case "ball":
      ProductComponent = Ball;
      break;
    case "socks":
      ProductComponent = Socks;
      break;
    case "bag":
      ProductComponent = Bag;
      break;
    case "insole":
      ProductComponent = Insole;
      break;
    // Add more cases for other brands as needed
    default:
      ProductComponent = AccessoryOfficial;
  }

  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="accessory" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescAccessory />
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default Accessory;
