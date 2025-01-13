import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import axios from "axios";

const statusMenu = {
  pending: "Chờ xác nhận",
  delivering: "Đang vận chuyển",
  shipped: "Giao thành công",
  canceled: "Đã huỷ",
  awaiting: "Chờ vận chuyển",
};

const OrderDetailDialog = ({ children, data }) => {
  // const [orderStatus, setOrderStatus] = useState("pending");

  const handleStatusChange = async (orderId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/orders/update-status/${orderId}?status=${statusMenu.canceled}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Cập nhật trạng thái đơn hàng thành công");
    } catch {
      toast.error("Lỗi khi cập nhật trạng thái đơn hàng");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thông tin chi tiết</DialogTitle>
          <DialogDescription>
            Lưu ý: Hãy cân nhắc trước khi huỷ đơn hàng
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Họ Và Tên</Label>
            <Label defaultValue="Pedro Duarte" className="col-span-3">
              {data[0].fullname}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Số Điện Thoại</Label>
            <Label defaultValue="Pedro Duarte" className="col-span-3">
              {data[0].phone_number}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Địa chỉ nhận hàng</Label>
            <Label defaultValue="Pedro Duarte" className="col-span-3">
              {data[0].shipping_address}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Trạng thái đơn hàng</Label>
            <Label defaultValue="Pedro Duarte" className="col-span-3">
              {statusMenu[data[0].status]}
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Phương thức thanh toán</Label>
            <Label defaultValue="Pedro Duarte" className="col-span-3">
              {data[0].payment_method}
            </Label>
          </div>
        </div>
        {/* <div>{JSON.stringify(data)}</div> */}
        {data[0].status === "pending" && (
          <DialogFooter>
            <button
              className="border rounded-lg text-red-500 border-red-500 bg-red-100 px-2 py-1"
              onClick={() => handleStatusChange(data[0].id)}
            >
              Huỷ đơn hàng
            </button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
