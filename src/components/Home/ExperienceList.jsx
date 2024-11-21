import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = () => {
  const features = [
    {
      imgSrc: "/experience1.png",
      title: "Tư vấn bán hàng chuyên nghiệp.",
      link: "/collections/shop",
    },
    {
      imgSrc: "/experience2.png",
      title: "Hỗ trợ đo chân bằng thiết bị chuyên nghiệp.",
      link: "/collections/shop",
    },
    {
      imgSrc: "/experience3.png",
      title: "Quà tặng khi mua hàng.",
      link: "/collections/shop",
    },
    {
      imgSrc: "/experience4.png",
      title: "Thanh toán linh hoạt.",
      link: "/collections/shop",
    },
    {
      imgSrc: "/experience5.png",
      title: "Hỗ trợ trả góp 0%.",
      link: "/collections/shop",
    },
    {
      imgSrc: "/experience6.png",
      title: "Dịch vụ giao hành nhanh chóng.",
      link: "/collections/shop",
    },
  ];

  return (
    <div>
      <p className="text-center text-3xl font-normal">
        TRẢI NGHIỆM MUA SẮM TẠI CỬA HÀNG
      </p>
      <p className="text-center font-normal">
        __________________________________________
      </p>
      <br />
      <br />
      <div className="flex justify-between items-center flex-wrap gap-4">
        {features.map((feature, index) => (
          <ExperienceCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            link={feature.link}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ExperienceList;
