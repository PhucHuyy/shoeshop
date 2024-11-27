import TabDemo from "@/components/layout/detail-product-tab";
import Preferential from "@/components/layout/preferential";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams();

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 px-5">
        <div className="col-span-2">This is detail product</div>
        <div></div>
        <Preferential />
      </div>
      <TabDemo />
    </div>
  );
};

export default DetailProduct;
