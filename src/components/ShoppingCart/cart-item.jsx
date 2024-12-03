import toast from "react-hot-toast";

const CartItem = (props) => {
  const productData = props.item;

  return (
    <div className="grid grid-cols-5 items-center text-center border-b py-4">
      <div className="flex items-center gap-5">
        <img
          src="https://via.placeholder.com/100"
          alt="Sản phẩm"
          className="w-20 h-20 object-cover"
        />
        <div className="text-left">
          <h3 className="text-sm font-medium">{productData.product_name}</h3>
          <p className="text-gray-500 text-sm">Mã SP: FQ8331-700</p>
          <p className="text-gray-500 text-sm">Size: {productData.size}</p>
        </div>
      </div>

      <p className="text-sm font-medium">{productData.unit_price}</p>

      <div className="flex items-center justify-center gap-2">
        <button className="p-2 border rounded">-</button>
        <input
          type="text"
          value={productData.quantity}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button className="p-2 border rounded">+</button>
      </div>

      <p className="text-sm font-medium">{productData.total_rice}</p>

      <button
        className="text-red-500 font-bold"
        onClick={() => toast.error("Đã Xoá")}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
