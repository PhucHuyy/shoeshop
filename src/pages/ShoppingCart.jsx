import React from "react";

const ShoppingCart = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        {/* Tiêu đề */}
        <div className="grid grid-cols-4 text-center font-bold border-b pb-4 mb-4">
          <h2>Sản phẩm</h2>
          <h2>Đơn giá</h2>
          <h2>Số lượng</h2>
          <h2>Thành tiền</h2>
        </div>

        {/* Sản phẩm */}
        <div className="grid grid-cols-4 items-center text-center border-b py-4">
          {/* Sản phẩm chi tiết */}
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Sản phẩm"
              className="w-20 h-20 object-cover"
            />
            <div className="text-left">
              <h3 className="text-sm font-medium">
                Nike Zoom Mercurial Superfly 10 Academy TF
              </h3>
              <p className="text-gray-500 text-sm">Mã SP: FQ8331-700</p>
              <p className="text-gray-500 text-sm">Nhóm: 38.5</p>
            </div>
          </div>

          {/* Đơn giá */}
          <p className="text-sm font-medium">2,250,000₫</p>

          {/* Số lượng */}
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 border rounded">-</button>
            <input
              type="text"
              value="1"
              readOnly
              className="w-12 text-center border rounded"
            />
            <button className="p-2 border rounded">+</button>
          </div>

          {/* Thành tiền */}
          <p className="text-sm font-medium">2,250,000₫</p>
        </div>

        {/* Tổng cộng */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold">Thành tiền</p>
          <p className="text-lg font-bold text-red-600">2,250,000₫</p>
        </div>

        {/* Nút thanh toán */}
        <div className="mt-6 text-right">
          <button className="px-6 py-2 bg-black text-white rounded">
            Thanh toán
          </button>
        </div>
      </div>

      {/* Nút tiếp tục mua sắm */}
      <div className="mt-4">
        <button className="text-sm text-blue-600">&lt; Tiếp tục mua sắm</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
