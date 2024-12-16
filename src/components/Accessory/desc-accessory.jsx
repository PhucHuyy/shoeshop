const DescAccessory = () => {
  return (
    <div className="">
      <div className="w-full h-full object-cover overflow-hidden">
        <img
          src="/phukien.jpg"
          alt="Hình ảnh minh hoạ"
          className=" transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="font-semibold text-5xl py-4">PHỤ KIỆN CHÍNH HÃNG</div>
        <div className="py-2 text-justify bold">
          NPM Store tự hào là đại lý phân phối chính hãng các sản phẩm phụ kiện
          đến từ các thương hiệu nổi tiếng như Activital - vớ thể thao,
          Grandsport - phụ kiện thể thao, StarBalm - chai xịt nóng, lạnh, Bóng
          Động Lực - trái banh thi đấu chính thức tại các giải đấu lớn.
        </div>

        <hr className="w-[100%] border border-gray-400 " />
      </div>
    </div>
  );
};

export default DescAccessory;
