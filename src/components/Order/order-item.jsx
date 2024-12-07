import { Button } from "../ui/button";

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

        <div className="flex items-center justify-center gap-2">
          {item.status}
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
