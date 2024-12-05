import InfomationCustomer from "@/components/CheckOut/information-customer";
import InformationProduct from "@/components/CheckOut/information-product";

const CheckOut = () => {
  return (
    <div className="flex justify-between gap-6 p-6">
      <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <InfomationCustomer />
      </div>

      <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <InformationProduct />
      </div>
    </div>
  );
};

export default CheckOut;
