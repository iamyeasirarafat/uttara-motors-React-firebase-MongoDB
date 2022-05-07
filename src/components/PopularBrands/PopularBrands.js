import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import tesla from "../../assets/images/teslaLogo.png"
import suzuki from "../../assets/images/suzukiLogo.png"
import toyota from "../../assets/images/toyotaLogo.jpg"

import audi from "../../assets/images/audiLogo.png"
import yamaha from "../../assets/images/yamahaLogo.png"
const PopularBrands = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item  w-10/12 " data-value="1"><img src={tesla} alt="" /></div>,
        <div className="item  w-10/12 " data-value="2"><img src={suzuki} alt="" /></div>,
        <div className="item  w-10/12 " data-value="3"><img src={toyota} alt="" /></div>,
       
        <div className="item w-10/12" data-value="7"><img src={audi} alt="" /></div>,
        <div className="item w-10/12" data-value="8"><img src={yamaha} alt="" /></div>,
    ];
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-semibold my-10 ">Popular Brands</h2>
            <AliceCarousel className=""
                mouseTracking
                items={items}
                responsive={responsive}

            />
        </div>
    );
};

export default PopularBrands;