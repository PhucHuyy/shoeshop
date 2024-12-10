import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import OrderList from "@/components/Order/order-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Order = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrderList(res.data.payload);
      } catch {
        toast.error("Lỗi khi lấy dữ liệu");
      }
    };
    fetchData();
  }, []);

  if (orderList.length === 0) {
    return <div>ĐƠN HÀNG TRỐNG !!!</div>;
  }

  const pendingProducts = orderList.filter(
    (product) => product.status === "pending"
  );
  const deliveringProducts = orderList.filter(
    (product) => product.status === "delivering"
  );
  const successProducts = orderList.filter(
    (product) => product.status === "shipped"
  );
  const cancelProducts = orderList.filter(
    (product) => product.status === "canceled"
  );

  return (
    <div className="flex items-center justify-center min-w-[80%] pt-5">
      <Tabs
        defaultValue="all"
        className="w-[90%] text-lg border border-gray-300 rounded-lg"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all" className="text-lg font-bold">
            TẤT CẢ ĐƠN HÀNG
          </TabsTrigger>
          <TabsTrigger value="pending" className="text-lg font-bold">
            CHỜ XÁC NHẬN
          </TabsTrigger>
          <TabsTrigger value="delivering" className="text-lg font-bold">
            ĐANG VẬN CHUYỂN
          </TabsTrigger>
          <TabsTrigger value="success" className="text-lg font-bold">
            GIAO THÀNH CÔNG
          </TabsTrigger>
          <TabsTrigger value="cancel" className="text-lg font-bold">
            ĐÃ HUỶ
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="min-h-[500px]">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <OrderList data={orderList} />
          </div>
        </TabsContent>
        <TabsContent value="pending" className="min-h-[500px] ">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <OrderList data={pendingProducts} />
          </div>
        </TabsContent>
        <TabsContent value="delivering" className="min-h-[500px] ">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <OrderList data={deliveringProducts} />
          </div>
        </TabsContent>
        <TabsContent value="success" className="min-h-[500px] ">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <OrderList data={successProducts} />
          </div>
        </TabsContent>
        <TabsContent value="cancel" className="min-h-[500px] ">
          <div className="px-[75px] py-5 space-y-5 text-sm font-semibold">
            <OrderList data={cancelProducts} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Order;
