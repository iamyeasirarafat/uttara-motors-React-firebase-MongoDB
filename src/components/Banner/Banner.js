import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from '../../assets/images/slider1.png'
import slide2 from '../../assets/images/slider2.jpg'
import slide3 from '../../assets/images/slider3.jpg'
import slide4 from '../../assets/images/slider4.jpg'
import slide5 from '../../assets/images/slider5.jpg'
import slide6 from '../../assets/images/slider6.png'
import slide7 from '../../assets/images/slider7.png'
export default function Banner() {
  const items = [
    <div className="item" data-value="1"><img src={slide1} alt="" /></div>,
    <div className="item" data-value="2"><img src={slide2} alt="" /></div>,
    <div className="item" data-value="3"><img src={slide3} alt="" /></div>,
    <div className="item" data-value="4"><img src={slide4} alt="" /></div>,
    <div className="item" data-value="5"><img src={slide5} alt="" /></div>,
    <div className="item" data-value="6"><img src={slide6} alt="" /></div>,
    <div className="item" data-value="7"><img src={slide7} alt="" /></div>,
  ];

  return (
    <div>

      <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2500}
        animationDuration={1000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />


    </div>
  );
}
