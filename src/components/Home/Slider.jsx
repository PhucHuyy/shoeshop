import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const data = [
//   {
//     title: "Slide 1",
//     image:
//       "https://file.hstatic.net/200000278317/collection/main-category-banner-salevapor_b94395f992c84721b30efbe344b69240_master.jpg",
//   },
//   {
//     title: "Slide 2",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Brook%2C_pig_on_the_green_-_geograph.org.uk_-_1444361.jpg/300px-Brook%2C_pig_on_the_green_-_geograph.org.uk_-_1444361.jpg",
//   },
//   {
//     title: "Slide 3",
//     image:
//       "https://media.istockphoto.com/id/487646988/vi/anh/heo.jpg?s=612x612&w=0&k=20&c=sL6m_KDgHs5qouRTRdrklZhB_HAuFisTiDb1WO2wH5E=",
//   },
// ];

// const Slider = () => {
//   return (
//     <div className="w-full flex justify-center">
//       <Carousel className="w-[88%] h-[550px]">
//         <CarouselContent className="">
//           {data.map((item, index) => (
//             <CarouselItem
//               key={index}
//               className="h-[550px] overflow-hidden flex items-center justify-center"
//             >
//               <div className=" w-full h-full">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={item.image}
//                   alt={item.title}
//                 />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };

const data = [
  {
    title: "Slide 1",
    image:
      "https://file.hstatic.net/200000278317/collection/main-category-banner-salevapor_b94395f992c84721b30efbe344b69240_master.jpg",
  },
  {
    title: "Slide 2",
    image:
      "https://theme.hstatic.net/200000278317/1000929405/14/slideshow_2.jpg?v=1968",
  },
  {
    title: "Slide 3",
    image:
      "https://theme.hstatic.net/200000278317/1000929405/14/slideshow_3.jpg?v=1968",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[88%] h-[550px] relative overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 opacity-75 hover:opacity-100 z-20"
          onClick={handlePrevious}
        >
          <ChevronLeft />
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 opacity-75 hover:opacity-100 z-20"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
