import ProductCard from "@/components/Home/ProductCard";

import { products } from "@/lib/data";

const NewComer = () => {
  return (
    <div>
      <p className="text-center text-3xl font-normal">MỚI RA MẮT</p>
      <p className="text-center font-normal">___________________</p>
      <br />
      <br />
      <div className="grid grid-cols-4 gap-5 px-14">
        {products.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default NewComer;
