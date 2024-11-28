import DetailProduct from "@/pages/DetailProduct";
import React from "react";
import { useParams } from "react-router-dom";

const DetailProductInfo = ({ productData }) => {
  return (
    <div className="flex gap-14 p-6 w-[70%] items-center justify-between">
      {/* Hiển thị hình ảnh chính */}
      <div className="w-[407px] h-[407px] ">
        <img
          src={productData.thumbnail} // Lấy hình ảnh từ trường `image`
          alt={productData.name}
          className="w-full h-full object-cover  border border-gray-300"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex-1">
        <h2 className="text-xl font-bold">{productData.name}</h2>
        <p className="text-sm text-gray-500">
          Loại: {productData.category_id} | Mã SP: {productData.id}
        </p>
        <div className="mt-4">
          <span className="text-red-500 text-2xl font-bold">
            {productData.price.toLocaleString()}₫
          </span>
          {/* <span className="line-through text-gray-500 ml-4">
            {productData.originalPrice.toLocaleString()}₫
          </span>
          <span className="text-green-500 ml-4">
            (Tiết kiệm {productData.discount.toLocaleString()}₫)
          </span> */}
        </div>

        {/* Thông tin thanh toán
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Trả sau đến 12 tháng với{" "}
            <span className="text-blue-500">Fundiin</span>
          </p>
        </div> */}

        {/* Lựa chọn kích thước */}
        <div className="mt-4">
          <p className="font-semibold">Kích thước</p>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {productData.sizes.length === 0
              ? "Đéo có size"
              : productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-300 hover:border-red-500 rounded-xl"
                  >
                    {size}
                  </button>
                ))}
          </div>
        </div>

        {/* Chọn số lượng */}
        <div className="flex justify-between items-center mt-6">
          <p className="font-semibold mr-4">Số lượng:</p>
          <button className="px-4 py-2 border border-gray-300">-</button>
          <span className="px-4 py-2">1</span>
          <button className="px-4 py-2 border border-gray-300">+</button>
          <button className="bg-red-500 text-white px-6 py-3 rounded">
            Thêm vào giỏ
          </button>
        </div>

        {/* Nút hành động */}
        <div className="flex gap-4 mt-6">
          <button className="bg-black w-full text-white px-6 py-3 rounded">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProductInfo;
