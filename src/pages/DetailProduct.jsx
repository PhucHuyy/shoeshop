import DetailProductInfo from "@/components/DetailProduct/detail-product";
import TabDemo from "@/components/DetailProduct/detail-product-tab";
import Preferential from "@/components/DetailProduct/preferential";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams(); // Lấy productId từ URL
  const navigate = useNavigate();

  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/products/${productId}`
        );
        setProductData(res.data.payload);
      } catch {
        toast.error("Lỗi khi lấy dữ liệu sản phẩm");
        navigate("/");
      }
    };

    fetchData();
  }, [navigate, productId]);

  // Nếu productData chưa có dữ liệu, hiển thị loader
  if (!productData) {
    return (
      <div className="flex w-full items-center justify-center mt-[250px] text-gray-400">
        <LoaderCircle size={128} strokeWidth={2} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-10 flex flex-col items-center ">
      {/* Hiển thị thông tin chi tiết sản phẩm */}
      <DetailProductInfo productData={productData} />
      {/* Ưu đãi */}
      <Preferential />
      {/* Tab thông tin thêm */}
      <TabDemo description={productData.description} />
    </div>
  );
};

export default DetailProduct;
