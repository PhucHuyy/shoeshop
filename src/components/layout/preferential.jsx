import {
  Backpack,
  CircleCheckBig,
  CreditCard,
  MapPin,
  Store,
  Truck,
} from "lucide-react";
import React from "react";

const Preferential = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-6 border border-gray-500 p-4">
        <div className="text-lg font-bold text-red-600 flex ">
          {" "}
          <Store strokeWidth={1} />
          <div className="pl-3">CÓ TẠI 1 CỬA HÀNG</div>
        </div>
        <div className="mt-2 flex items-center justify-start">
          <div className="font-medium flex items-center justify-start">
            <MapPin strokeWidth={1} />
            <div>69 VŨ TÔNG PHAN, KHƯƠNG TRUNG, THANH XUÂN, HÀ NỘI</div>
          </div>{" "}
          | <span className="font-medium"> HOTLINE: 0392 280 503</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Ưu đãi tặng kèm */}
        <div className="flex items-start space-x-4">
          <Backpack size={32} strokeWidth={1} />
          <div>
            <h3 className="font-semibold text-red-600">ƯU ĐÃI TẶNG KÈM</h3>
            <p>
              Tặng kèm vớ dệt kim và balo chống thấm đựng giày cho mỗi đơn hàng
              Giày đá bóng.
            </p>
          </div>
        </div>

        {/* Đổi hàng dễ dàng */}
        <div className="flex items-start space-x-4">
          <CircleCheckBig size={32} strokeWidth={1} />
          <div>
            <h3 className="font-semibold text-red-600">ĐỔI HÀNG DỄ DÀNG</h3>
            <p>
              Hỗ trợ khách hàng đổi size hoặc mẫu trong vòng 7 ngày. (Sản phẩm
              chưa qua sử dụng).
            </p>
          </div>
        </div>

        {/* Chính sách giao hàng */}
        <div className="flex items-start space-x-4">
          <Truck size={64} strokeWidth={1} />
          <div>
            <h3 className="font-semibold text-red-600">CHÍNH SÁCH GIAO HÀNG</h3>
            <p>
              COD & Freeship toàn quốc khi khách hàng thanh toán chuyển khoản
              trước từ 100k. Áp dụng với đơn hàng giày đá bóng, không áp dụng
              với đơn hàng phụ kiện.
            </p>
          </div>
        </div>

        {/* Thanh toán tiện lợi */}
        <div className="flex items-start space-x-4">
          <CreditCard size={32} strokeWidth={1} />
          <div>
            <h3 className="font-semibold text-red-600">THANH TOÁN TIỆN LỢI</h3>
            <p>
              Chấp nhận các loại hình thanh toán bằng thẻ, tiền mặt, chuyển
              khoản.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferential;
