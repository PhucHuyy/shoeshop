import { cn } from "@/lib/utils";

const statusMenu = {
  pending: "Chờ xác nhận",
  delivering: "Đang vận chuyển",
  shipped: "Giao thành công",
  canceled: "Đã huỷ",
};

const OrderItem = ({ item, hasSeparator, color }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 items-center text-center">
        <div className="flex items-center gap-5">
          <img
            src={`http://localhost:8080/products/images/${item.image}`}
            alt="Sản phẩm"
            className="w-20 h-20 object-cover"
          />
          <div className="text-left">
            <h3 className="text-sm font-medium">{item.product_name}</h3>
            <p className="text-gray-500 text-sm">Size: {item.size}</p>
            <p className="text-gray-500 text-sm">SL: {item.quantity}</p>
          </div>
        </div>

        <p className="text-sm font-medium">{item.unit_price}</p>

        <p className="text-sm font-medium">{item.total_price}</p>

        <div
          className={cn(
            "border-2 rounded-full px-3 py-1 text-sm font-semibold",
            item.status === "pending" &&
              "text-yellow-500 border-yellow-500 bg-yellow-100",
            item.status === "delivering" &&
              "text-blue-500 border-blue-500 bg-blue-100",
            item.status === "shipped" &&
              "text-green-500 border-green-500 bg-green-100",
            item.status === "canceled" &&
              "text-red-500 border-red-500 bg-red-100"
          )}
        >
          {statusMenu[item.status]}
        </div>
        {/* {item.status === "pending" && (
          <Button
            className=" font-bold w-32"
            size="sm"
            variant="destructive"
            // onClick={() => onDelete(productData.id)}
            // disabled={loading}
          >
            Huỷ Đơn Hàng
          </Button>
        )} */}
      </div>
      {!hasSeparator && (
        <hr
          style={{ backgroundColor: color, height: "0.5px", border: "none" }}
        />
      )}
    </div>
  );
};

export default OrderItem;
