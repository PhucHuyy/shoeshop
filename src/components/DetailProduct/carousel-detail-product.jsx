import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CarouselDetailProduct = ({ productData }) => {
  return (
    <div>
      <Carousel orientation="vertical | horizontal">
        <CarouselContent>
          {productData.product_images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="w-[80px] h-[80px]">
                <img
                  className="w-full h-full object-cover"
                  src={"http://localhost:8080/products/images/" + item.imageUrl}
                  alt={productData.name}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselDetailProduct;
