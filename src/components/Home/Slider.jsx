import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const data = [
  {
    title: "Slide 1",
    image:
      "https://file.hstatic.net/200000278317/collection/main-category-banner-salevapor_b94395f992c84721b30efbe344b69240_master.jpg",
  },
  {
    title: "Slide 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Brook%2C_pig_on_the_green_-_geograph.org.uk_-_1444361.jpg/300px-Brook%2C_pig_on_the_green_-_geograph.org.uk_-_1444361.jpg",
  },
  {
    title: "Slide 3",
    image:
      "https://media.istockphoto.com/id/487646988/vi/anh/heo.jpg?s=612x612&w=0&k=20&c=sL6m_KDgHs5qouRTRdrklZhB_HAuFisTiDb1WO2wH5E=",
  },
];

const Slider = () => {
  return (
    <Carousel className="w-[88%] h-[550px]">
      <CarouselContent className="">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="h-[550px] overflow-hidden flex items-center justify-center"
          >
            <div className=" w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
