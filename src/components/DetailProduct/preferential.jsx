import {
  Backpack,
  CircleCheckBig,
  CreditCard,
  MapPin,
  Store,
  Truck,
} from "lucide-react";
import React from "react";

const data = [
  {
    title: "THAM KHẢO SẢN PHẨM TẠI: ",
    desc: "69 VŨ TÔNG PHAN, KHƯƠNG TRUNG, THANH XUÂN, HÀ NỘI",
    icon: <Store strokeWidth={1} />,
    subIcon: <MapPin strokeWidth={1} />,
  },
  {
    title: "ƯU ĐÃI TẶNG KÈM",
    desc: "Tặng kèm vớ dệt kim và balô chống thấm đựng giày cho mỗi đơn hàng Giày đá bóng.",
    icon: <Backpack strokeWidth={1} />,
  },
  {
    title: "ĐỔI HÀNG DỄ DÀNG",
    desc: "Hỗ trợ khách hàng đổi size hoặc mẫu trong vòng 7 ngày. (Sản phẩm chưa qua sử dụng).",
    icon: <CircleCheckBig strokeWidth={1} />,
  },
  {
    title: "CHÍNH SÁCH GIAO HÀNG",
    desc: "COD & Freeship toàn quốc khi khách hàng thanh toán chuyển khoản trước từ 100k. Áp dụng với đơn hàng giày đá bóng, không áp dụng với đơn hàng phụ kiện.",
    icon: <Truck strokeWidth={1} />,
  },
  {
    title: "THANH TOÁN TIỆN LỢI",
    desc: "Chấp nhận các loại hình thanh toán bằng thẻ, tiền mặt, chuyển khoản.",
    icon: <CreditCard strokeWidth={1} />,
  },
];

const Preferential = () => {
  return (
    <div className="w-[70%]">
      {data.map((item, index) => (
        <div
          className="hover:text-red-600 hover:bg-red-100 shadow-md cursor-pointer mb-6 border border-gray-500 hover:border-red-500 p-4 flex space-x-2  rounded-lg"
          key={index}
        >
          <div className="flex flex-col space-y-2">
            <div className="">{item.icon}</div>
            <div className="text-black mt-2">{item.subIcon}</div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold ">{item.title}</div>
            <div className="text-black">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preferential;
