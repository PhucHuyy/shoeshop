import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";

const statusMenu = {
  pending: "Chờ xác nhận",
  delivering: "Đang vận chuyển",
  shipped: "Giao thành công",
  canceled: "Đã huỷ",
};

const OrderDetailDialog = ({ children, data }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thông tin chi tiết</DialogTitle>
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
        </div>
        {/* <div>{JSON.stringify(data)}</div> */}
        {data[0].status === "pending" && (
          <DialogFooter>
            <button className="border rounded-lg text-red-500 border-red-500 bg-red-100 px-2 py-1">
              Huỷ đơn hàng
            </button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
