import BreadCrumb from "@/components/Breadcrumb";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";

const ShoeIC = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="shoeic" />
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

export default ShoeIC;
