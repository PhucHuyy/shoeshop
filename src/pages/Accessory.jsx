import BreadCrumb from "@/components/Breadcrumb";
import AllProduct from "@/components/Shop/AllProduct";
import ShopCategories from "@/components/Shop/ShopCategories";

const Accessory = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="accessory" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <p>this is shop page</p>
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default Accessory;
