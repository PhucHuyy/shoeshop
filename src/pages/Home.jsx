import NewComer from "@/components/Home/NewComer";
import ProductCard from "@/components/Home/ProductCard";
import Slider from "@/components/Home/Slider";

import { products } from "@/lib/data";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Slider />
      <div className="grid grid-cols-4 gap-5 px-14">
        {products.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
