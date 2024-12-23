import {
  Facebook,
  Instagram,
  Mail,
  MapPinHouse,
  Phone,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around mt-7">
      <div className="flex-col ">
        <img
          src="/logo-footer.png"
          alt="NPC Store"
          className="w-[150px] h-[100px] object-cover rounded-lg cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-col items-start space-y-4">
        <h5 className="text-lg font-semibold">Thông tin liên hệ</h5>
        <dl className="space-y-2">
          <dt className="flex items-center space-x-2">
            <MapPinHouse className="" />
            <span>Hà Nội</span>
          </dt>
          <dt className="flex items-center space-x-2">
            <Phone className="" />
            <span>0392280503</span>
          </dt>
          <dt className="flex items-center space-x-4">
            <Facebook className="" />
            <Twitter className="" />
            <Instagram className="" />
            <Mail className="" />
          </dt>
        </dl>
      </div>

      <div className="flex-col">
        <h5 className="text-lg font-semibold">Dịch vụ</h5>
        <br />
        <ul>
          <li>Vận chuyển hàng</li>
          <li>Thanh toán tại nhà</li>
          <li>Tư vấn mua hàng</li>
          <li>Hướng dẫn sử dụng</li>
        </ul>
      </div>
      <div className="flex-col">
        <h5 className="text-lg font-semibold">Liên kết</h5>
        <br />
        <ul>
          <li>Liên kết và góp ý</li>
          <li>Câu hỏi thường gặp</li>
          <li>Tuyển dụng</li>
          <li>Hướng dẫn sử dụng</li>
        </ul>
      </div>
      <div className="flex-col">
        <h5 className="text-lg font-semibold">Hướng dẫn thanh toán</h5>
        <br />
        <ul>
          <li>Hướng dẫn thành toán</li>
          <li>Hướng dẫn mua hàng</li>
          <li>Hướng dẫn sử dụng</li>
          <li>Hướng dẫn cài đặt</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
