import BreadCrumb from "@/components/Breadcrumb";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";
import { useSearchParams } from "react-router-dom";

import DescShoeTF from "@/components/ShoeTF/desc-shoe-tf";
import NikeShoeTF from "@/pageCategoryShoe/nike/nike-shoe-tf";
import PumaShoeTF from "@/pageCategoryShoe/nike/puma-shoe-tf";
import AdidasShoeTF from "@/pageCategoryShoe/nike/adidas-shoe-tf";
import MizunoShoeTF from "@/pageCategoryShoe/nike/mizuno-shoe-tf";
import JomaShoeTF from "@/pageCategoryShoe/nike/joma-shoe-tf";
import ZockerShoeTF from "@/pageCategoryShoe/nike/zocker-shoe-tf";
import KamitoShoeTF from "@/pageCategoryShoe/nike/kamito-shoe-tf";

const ShoeTF = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand");

  let ProductComponent;
  switch (brand) {
    case "NIKE":
      ProductComponent = NikeShoeTF;
      break;
    case "PUMA":
      ProductComponent = PumaShoeTF;
      break;
    case "ADIDAS":
      ProductComponent = AdidasShoeTF;
      break;
    case "MIZUNO":
      ProductComponent = MizunoShoeTF;
      break;
    case "JOMA":
      ProductComponent = JomaShoeTF;
      break;
    case "ZOCKER":
      ProductComponent = ZockerShoeTF;
      break;
    case "KAMITO":
      ProductComponent = KamitoShoeTF;
      break;
    case "DESPORTE":
      ProductComponent = DescShoeTF;
      break;

    // Add more cases for other brands as needed
    default:
      ProductComponent = AllProduct;
  }

  return (
    <div className="space-y-5 px-5">
      <BreadCrumb type="shoetf" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescShoeTF />
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ShoeTF;
