// import DetailProductInfo from "@/components/layout/detail-product";
// import TabDemo from "@/components/layout/detail-product-tab";
// import Preferential from "@/components/layout/preferential";
// import { productData } from "@/lib/data";
// import { useParams } from "react-router-dom";

// const DetailProduct = () => {
//   const { productId } = useParams();

//   return (
//     <div className="space-y-10">
//       <div className="grid grid-cols-2 px-5">
//         <div>
//           <DetailProductInfo productData={productData} />
//         </div>
//         <div></div>
//         <Preferential />
//       </div>
//       <TabDemo />
//     </div>
//   );
// };

// export default DetailProduct;

import DetailProductInfo from "@/components/layout/detail-product";
import TabDemo from "@/components/layout/detail-product-tab";
import Preferential from "@/components/layout/preferential";
import { productData } from "@/lib/data";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams(); // Lấy productId từ URL

  // Tìm sản phẩm tương ứng dựa trên productId
  const product = productData.find((item) => item.id === productId);

  // Nếu không tìm thấy sản phẩm, hiển thị thông báo lỗi
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">
          Sản phẩm không tồn tại!
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 px-5 gap-2">
        {/* Hiển thị thông tin chi tiết sản phẩm */}
        <div className=" col-span-2">
          <DetailProductInfo productData={product} />
        </div>
        {/* Ưu đãi */}
        <div></div>
        <div>
          <Preferential />
        </div>
      </div>
      {/* Tab thông tin thêm */}
      <TabDemo />
    </div>
  );
};

export default DetailProduct;
