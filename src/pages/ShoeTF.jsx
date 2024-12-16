import BreadCrumb from "@/components/Breadcrumb";
import DescShoeTF from "@/components/ShoeTF/desc-shoe-tf";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";

const ShoeTF = () => {
  return (
    <div className="space-y-5 px-5">
      <BreadCrumb type="shoetf" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescShoeTF />
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default ShoeTF;
