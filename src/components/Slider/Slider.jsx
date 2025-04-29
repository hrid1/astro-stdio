import React from "react";

import c2 from "../../assets/carosol/2.jpg";
import c3 from "../../assets/carosol/3.jpg";
import c4 from "../../assets/carosol/4.jpg";
import c1 from "../../assets/carosol/1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "BENJON",
    subtitle: "WEBSITE",
    year: "2012",
    image: c2,
  },
  {
    title: "PORTFOLIO",
    subtitle: "DESIGN",
    year: "2018",
    image: c3,
  },
  {
    title: "SHOWCASE",
    subtitle: "PROJECT",
    year: "2020",
    image: c1,
  },
  {
    title: "REBRAND",
    subtitle: "UI/UX",
    year: "2023",
    image: c4,
  },
];

const Slider = () => {
  return (
    <div className="bg-black text-white h-screen w-full flex flex-col justify-center items-center px-4 py-12">
      <div className="uppercase  text-gray-300 mb-4 tracking-widest text-xl font-semibold  w-full">
        <h4>Featured Work</h4>
      </div>
      <Swiper
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        className="relative w-full max-w-6xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center text-left relative">
              <div className=" space-y-4 absolute left-0 z-10">
                <div className="text-4xl text-gray-300 mb-2 font-bold text-right">{`${
                  index + 1
                } / ${slides.length}`}</div>
                <h2 className="text-[80px] md:text-[100px] font-extrabold leading-none">
                  {slide.title}
                </h2>
                <h2 className="text-[80px] md:text-[100px] font-extrabold leading-none ml-28">
                  {slide.subtitle}
                </h2>
                <h3 className="text-[70px] md:text-[90px] font-bold text-gray-200">
                  {slide.year}
                </h3>
              </div>
              <div className=" mt-8 md:mt-0 md:ml-12 mr-12 relative -right-40">
                <img
                  src={slide.image}
                  alt="slide"
                  className="w-full max-w-md mx-auto "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <button className="prev-btn absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white bg-white/10 border border-white/20 rounded-full  w-10 h-10  hover:bg-white/40">
          ←
        </button>
        <button className="next-btn absolute top-1/2 right-4  transform -translate-y-1/2 z-10 text-white bg-white/10 border border-white/20 rounded-full w-10 h-10 hover:bg-white/20">
          →
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
