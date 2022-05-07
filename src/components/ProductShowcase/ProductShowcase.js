import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import blueCar from "../../assets/images/blue.png"
import grayCar from "../../assets/images/gray.png"
import orangeCar from "../../assets/images/orange.png"
import redCar from "../../assets/images/red.png"
import slateCar from "../../assets/images/slate.jpg"
const ProductShowcase = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1"><img src={blueCar} alt="" /></div>,
    <div className="item" data-value="2"><img src={grayCar} alt="" /></div>,
    <div className="item" data-value="3"><img src={orangeCar} alt="" /></div>,
    <div className="item" data-value="4"><img src={redCar} alt="" /></div>,
    <div className="item" data-value="5"><img src={slateCar} alt="" /></div>,
    ];
    return (
        <div>
            <h2 className="text-3xl font-semibold my-10 ">Product Showcase</h2>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                
            />
        </div>
    );
};

export default ProductShowcase;