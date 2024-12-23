import OrderItem from "./order-item";
import OrderDetailDialog from "./order-detail-dialog";

import { getRandomColor } from "@/lib/utils";

const OrderList = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-4 text-center font-bold border-b pb-4 mb-4 px-5">
        <h2>Sản phẩm</h2>
        <h2>Đơn giá</h2>
        <h2>Thành tiền</h2>
        <h2>Trạng thái</h2>
      </div>
      <div className="space-y-4">
        {data.map((order, index) => {
          let subOrders = [];

          for (let i = 0; i < order.order_details.length; i++) {
            subOrders.push({
              colorShoe: order.order_details[i].color,
              user_id: order.user_id,
              id: order.id,
              fullname: order.fullname,
              note: order.note,
              order_date: order.order_date,
              product_name: order.order_details[i].product_id.name,
              unit_price: order.order_details[i].unit_price,
              total_price: order.order_details[i].total_rice,
              status: order.status,
              image: order.order_details[i].thumbnail,
              quantity: order.order_details[i].quantity,
              size: order.order_details[i].size,
              shipping_address: order.shipping_address,
              phone_number: order.phone_number,
              payment_method: order.payment_method,
            });
          }
          const color = getRandomColor();

          return (
            <OrderDetailDialog key={index} data={subOrders}>
              <div
                className="border-2 rounded-lg px-5 py-2 space-y-3 cursor-pointer border-gray-300 w-full"
                // style={{ borderColor: color }}
              >
                {subOrders.map((item, subIndex) => (
                  <OrderItem
                    key={`${index}_${subIndex}`}
                    item={item}
                    hasSeparator={subIndex === subOrders.length - 1}
                    color={color}
                  />
                ))}
              </div>
            </OrderDetailDialog>
          );
        })}
      </div>
    </div>
  );
};

export default OrderList;
