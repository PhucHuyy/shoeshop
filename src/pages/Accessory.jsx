import DescAccessory from "@/components/Accessory/desc-accessory";
import BreadCrumb from "@/components/Breadcrumb";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";

const Accessory = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="accessory" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescAccessory />
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default Accessory;
