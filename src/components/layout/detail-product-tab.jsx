import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabDemo = () => {
  return (
    <div className="flex items-center justify-center">
      <Tabs
        defaultValue="description"
        className="w-[80%] text-lg border border-pink-300 rounded-lg"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description" className="text-lg font-bold">
            MÔ TẢ SẢN PHẨM
          </TabsTrigger>
          <TabsTrigger value="warranty" className="text-lg font-bold">
            CHÍNH SÁCH BẢO HÀNH
          </TabsTrigger>
          <TabsTrigger value="advise" className="text-lg font-bold">
            LỜI KHUYÊN MUA GIÀY
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="min-h-[500px]">
          <div>This is description</div>
        </TabsContent>
        <TabsContent value="warranty" className="min-h-[500px] ">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <div>
              NPC Store luôn nỗ lực mang đến trải nghiệm mua sắm tuyệt vời dành
              cho Khách Hàng từ việc đa dạng hoá mẫu mã từ nhiều thương hiệu
              quốc tế nổi tiếng, dịch vụ tư vấn bán hàng online, offline và
              những dịch vụ hậu mãi không ngừng được hoàn thiện.
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/baohanh.jpg"
                alt="Bảo Hành"
                className="w-full h-full object-cover"
              />
            </div>
            <div>Sau đây là chính sách bảo hành của NPC Store</div>
            <div>ĐIỀU KIỆN BẢO HÀNH</div>
            <div>
              - Thanh Hùng Futsal hỗ trợ khách hàng bảo hành sửa chữa 6 tháng
              miễn phí
            </div>
            <div>
              - Thanh Hùng Futsal từ chối bảo hành sản phẩm đối với các trường
              hợp
            </div>
            <div>
              Sau khi hết thời gian bảo hành, shop vẫn hỗ trợ sửa chữa giày với
              chi phí hợp lý tại các cơ sở sửa chữa uy tín cho quý khách hàng
              trong suốt quá trình sử dụng.
            </div>
            <div>THỜI GIAN BẢO HÀNH</div>
            <div>
              Xử lý và trao trả sản phẩm đã được sửa chữa bảo hành cho khách
              hàng trong khoảng thời gian 05 ngày làm việc kể từ khi tiếp nhận
              sản phẩm (trừ các tình huống đặc biệt hoặc phải tìm chất liệu khó
              để thay thế, Shop sẽ liên hệ và đàm phán trực tiếp với khách
              hàng).
            </div>
          </div>
        </TabsContent>
        <TabsContent value="advise" className="min-h-[500px]">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <div>
              NPC Store luôn nỗ lực mang đến trải nghiệm mua sắm tuyệt vời dành
              cho Khách Hàng từ việc đa dạng hoá mẫu mã từ nhiều thương hiệu
              quốc tế nổi tiếng, dịch vụ tư vấn bán hàng online, offline và
              những dịch vụ hậu mãi không ngừng được hoàn thiện.
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/chon-giay.jpg"
                alt="Bảo Hành"
                className="w-full h-full object-cover"
              />
            </div>
            <div>Sau đây là chính sách bảo hành của NPC Store</div>
            <div>ĐIỀU KIỆN BẢO HÀNH</div>
            <div>
              - Thanh Hùng Futsal hỗ trợ khách hàng bảo hành sửa chữa 6 tháng
              miễn phí
            </div>
            <div>
              - Thanh Hùng Futsal từ chối bảo hành sản phẩm đối với các trường
              hợp
            </div>
            <div>
              Sau khi hết thời gian bảo hành, shop vẫn hỗ trợ sửa chữa giày với
              chi phí hợp lý tại các cơ sở sửa chữa uy tín cho quý khách hàng
              trong suốt quá trình sử dụng.
            </div>
            <div>THỜI GIAN BẢO HÀNH</div>
            <div>
              Xử lý và trao trả sản phẩm đã được sửa chữa bảo hành cho khách
              hàng trong khoảng thời gian 05 ngày làm việc kể từ khi tiếp nhận
              sản phẩm (trừ các tình huống đặc biệt hoặc phải tìm chất liệu khó
              để thay thế, Shop sẽ liên hệ và đàm phán trực tiếp với khách
              hàng).
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabDemo;
