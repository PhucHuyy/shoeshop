import BreadCrumb from "@/components/Breadcrumb";
import ShoeTFProduct from "@/components/ShoeTF/shoe-tf-product";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";

const ShoeTF = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="shoetf" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <p>this is shop page</p>
          <ShoeTFProduct />
        </div>
      </div>
    </div>
  );
};

export default ShoeTF;
