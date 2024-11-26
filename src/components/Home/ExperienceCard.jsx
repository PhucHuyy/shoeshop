import React from "react";

const ExperiencCard = ({ imgSrc, title, link }) => {
  return (
    <div className="grid gap-y-3">
      <div>
        <a href={link} className="group">
          {/* Hình ảnh */}
          <img
            src={imgSrc}
            alt={title}
            className="w-[112px] h-[112px] rounded-full object-cover border border-gray-300 shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Tiêu đề */}
      <h3 className="mt-2 text-sm font-medium text-gray-700 leading-5 group-hover:text-black">
        {title}
      </h3>
    </div>
  );
};

export default ExperiencCard;

// flex flex-col items-center text-center
