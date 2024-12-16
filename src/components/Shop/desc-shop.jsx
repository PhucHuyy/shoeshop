const DescriptionShop = () => {
  return (
    <div className="">
      <div className="w-full h-full object-cover overflow-hidden">
        <img
          src="/mo-ta-shop.jpg"
          alt="Hình ảnh minh hoạ"
          className=" transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="font-semibold text-5xl py-4">TẤT CẢ SẢN PHẨM</div>
        <div className="py-2 text-justify bold">
          Chọn một đôi giày đá bóng thích hợp sẽ giúp bạn tự tin thể hiện hết
          khả năng mỗi khi ra sân. Và để xác định đúng “chân ái” dành riêng cho
          bạn, có 3 yếu tố tiên quyết bạn nên cân nhắc: mặt sân thi đấu (sân sàn
          hay sân cỏ nhân tạo), form chân (chân thon hay bè) và mức giá mong
          muốn.
        </div>
        <div className="text-justify bold mb-7">
          Tại NPC Store, chúng mình đang có sẵn những mẫu Giày Đá Bóng Cỏ Nhân
          Tạo và Giày Futsal mới và hot nhất đến từ 10 thương hiệu thể thao hàng
          đầu trong nước và quốc tế, bao gồm các thương hiệu hàng đầu hiện nay
          như Nike, Adidas, Puma, Mizuno, Joma, Asics...Cùng với đó là các Phụ
          Kiện Ra Sân tiện lợi như vớ, túi đựng giày, trái bóng,...
        </div>
        <hr className="w-[100%] border border-gray-400 " />
      </div>
    </div>
  );
};

export default DescriptionShop;
