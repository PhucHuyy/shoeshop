import Note1 from "/note1.jpg";
import Note2 from "/note2.png";
import Note3 from "/note3.png";
import Note4 from "/note4.png";

const Note = () => {
  return (
    <div>
      <p className="text-center text-3xl font-normal py-4">DANH MỤC SẢN PHẨM</p>
      <p className="text-center font-normal">___________________</p>
      <br />
      <br />
      <div className="flex justify-evenly">
        <a href="/collections/giay-co-nhan-tao">
          <img
            src={Note1}
            alt="giày cỏ nhân tạo"
            className="w-[254px] h-[254px]"
          />
        </a>
        <a href="/collections/giay-futsal">
          <img src={Note2} alt="giày futsal" className="w-[254px] h-[254px]" />
        </a>
        <a href="/collections/phu-kien">
          <img src={Note3} alt="phụ kiện" className="w-[254px] h-[254px]" />
        </a>
        <a href="/collections/hot-sales">
          <img src={Note4} alt="hot-sale" className="w-[254px] h-[254px]" />
        </a>
      </div>
    </div>
  );
};

export default Note;
