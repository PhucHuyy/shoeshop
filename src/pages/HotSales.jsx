import BreadCrumb from "@/components/Breadcrumb";
import DescHotSale from "@/components/HotSales/desc-hot-sale";
import ProductCardSale from "@/components/ProductCardSale";
import ShopCategories from "@/components/Shop/shop-categories";

const HotSales = () => {
  return (
    <div className="px-3 space-y-5">
      <BreadCrumb type="hotsales" />
      <div className="flex gap-5">
        <ShopCategories />
        <div className="flex flex-col flex-1 space-y-4">
          <DescHotSale />
          <ProductCardSale />
        </div>
      </div>
    </div>
  );
};

export default HotSales;
