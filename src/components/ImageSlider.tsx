"use client";

import React, { useState } from "react";

interface Image {
  id: number;
  src: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative w-2/3 h-80">
        <div className="flex items-center justify-center h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-full h-full transition-all duration-300 transform ${
                index === currentIndex ? "scale-125" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
        <div
          className="absolute left-0 top-1/2 cursor-pointer"
          onClick={prevImage}
        >
          &#9664;
        </div>
        <div
          className="absolute right-0 top-1/2 cursor-pointer"
          onClick={nextImage}
        >
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
