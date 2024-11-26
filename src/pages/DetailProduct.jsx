import TabDemo from "@/components/layout/detail-product-tab";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams();

  return (
    <div className="space-y-10">
      <div>This is detail product</div>
      <TabDemo />
    </div>
  );
};

export default DetailProduct;
