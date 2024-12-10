"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const CarouselComponent = () => {
  const slides = [
    { id: 1, img: "/apple.jpg", type: "image" },
    { id: 2, img: "/images.jpg", type: "image" },
    { id: 3, img: "/imageo.jpg", type: "image" },
  ];

  return (
    <div className=" mt-10  p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={2}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src={slide.img} // Use `slide.img` to reference the image path
                alt={`Slide ${slide.id}`}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
