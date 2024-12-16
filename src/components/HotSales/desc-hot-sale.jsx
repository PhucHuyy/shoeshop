const DescHotSale = () => {
  return (
    <div className="">
      <div className="w-full h-full object-cover overflow-hidden">
        <img
          src="/hotsales.jpg"
          alt="Hình ảnh minh hoạ"
          className=" transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="font-semibold text-5xl py-4">HOT SALES</div>
        <div className="py-2 text-justify bold">
          Mua giày đá banh chính hãng với giá ưu đãi - HOT Sale từ các thương
          hiệu nổi tiếng như Nike, adidas, Puma, Mizuno, Desporte,... Dành cho
          bề mặt sân cỏ nhân tạo và sân futsal. Tặng Vớ và Balô THF đối với đơn
          hàng mua giày. Hỗ trợ trả góp không lãi suất. Bảo hành 3 tháng.
        </div>

        <hr className="w-[100%] border border-gray-400 " />
      </div>
    </div>
  );
};

export default DescHotSale;
