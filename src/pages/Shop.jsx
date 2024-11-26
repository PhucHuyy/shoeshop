import BreadCrumb from "@/components/breadcrumb";
import AllProduct from "@/components/Shop/AllProduct";
import ShopCategories from "@/components/Shop/ShopCategories";

const ShopPage = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="all" />
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

export default ShopPage;
