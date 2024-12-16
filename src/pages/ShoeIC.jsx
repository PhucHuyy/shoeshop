import BreadCrumb from "@/components/Breadcrumb";
import DescShoeIC from "@/components/ShoeIC/desc-shoe-ic";
import AllProduct from "@/components/Shop/all-product";
import ShopCategories from "@/components/Shop/shop-categories";

const ShoeIC = () => {
  return (
    <div className="space-y-5 px-5">
      <BreadCrumb type="shoeic" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescShoeIC />
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default ShoeIC;
