import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/images/slider1.png'
import slide2 from '../../assets/images/slider2.jpg'
import slide3 from '../../assets/images/slider3.jpg'
import slide4 from '../../assets/images/slider4.jpg'
import slide5 from '../../assets/images/slider5.jpg'
import slide6 from '../../assets/images/slider6.png'
import slide7 from '../../assets/images/slider7.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";






// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
            delay: 2500,
           
          }}
       
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
