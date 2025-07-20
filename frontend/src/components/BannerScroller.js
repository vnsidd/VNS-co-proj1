import React from "react";

const images = [
  require("../assets/banners/banner1.png"),
  require("../assets/banners/banner2.png"),
  require("../assets/banners/banner3.png"),
  require("../assets/banners/banner1.png"),
  require("../assets/banners/banner2.png"),
  require("../assets/banners/banner3.png"),
];

const BannerScroller = () => {
  return (
    <div className="w-full py-4 overflow-hidden bg-white">
      <div className="flex space-x-8 animate-scroll">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Banner ${idx}`}
            className="h-40 shadow-md rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerScroller;
