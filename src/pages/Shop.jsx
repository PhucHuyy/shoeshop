import BreadCrumb from "@/components/breadcrumb";
import ShopCategories from "@/components/Shop/ShopCategories";

const ShopPage = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="all" />
      <div className="flex gap-5">
        <ShopCategories />
        <p>this is shop page</p>
      </div>
    </div>
  );
};

export default ShopPage;
