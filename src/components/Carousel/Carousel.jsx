
// import "../../assets/css/custom.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

const Carousel = () => {
    
      const settings = {
        dots: true,
        infinite: true,
          speed: 500,
          autoplay: true,
        autoplayspeed : 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="carousel-container hero w-11/12 md:w-10/12 mx-auto">
            <Slider {...settings} className='flex gap-2'>
                <div className="carousel-item px-10 bg-blue-900 text-white py-8 rounded-lg flex items-center">
                    <div className="carousel-text w-2/3">
                        <p className="text-sm">Friday deals on smart watches</p>
                        <h2 className="text-3xl font-bold mt-2">SMART WEARABLE</h2>
                        <p className="text-lg mt-1">UP TO 70% OFF</p>
                    </div>
                    <div className="carousel-image w-1/3">
                        <img
                            src="/images/smartwatch.png"  // Ganti dengan path gambar kamu
                            alt="Smart Watch"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="carousel-item px-10 bg-blue-900 text-white py-8 rounded-lg flex items-center">
                    <div className="carousel-text w-2/3">
                        <p className="text-sm">Friday deals on smart watches</p>
                        <h2 className="text-3xl font-bold mt-2">SMART WEARABLE</h2>
                        <p className="text-lg mt-1">UP TO 70% OFF</p>
                    </div>
                    <div className="carousel-image w-1/3">
                        <img
                            src="/images/smartwatch.png"  // Ganti dengan path gambar kamu
                            alt="Smart Watch"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="carousel-item px-10 bg-blue-900 text-white py-8 rounded-lg flex items-center">
                    <div className="carousel-text w-2/3">
                        <p className="text-sm">Gokil</p>
                        <h2 className="text-3xl font-bold mt-2">SMART WEARABLE</h2>
                        <p className="text-lg mt-1">UP TO 70% OFF</p>
                    </div>
                    <div className="carousel-image w-1/3">
                        <img
                            src="/images/smartwatch.png"  // Ganti dengan path gambar kamu
                            alt="Smart Watch"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                {/* Tambahkan slide lain di sini jika perlu */}
            </Slider>
        </div>
    );
};

// Komponen untuk panah kiri
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-prev" onClick={onClick}>
            {/* <FiChevronLeft className="text-white  text-2xl" /> */}
        </div>
    );
};

// Komponen untuk panah kanan
const NextArrow = (props) => {
    const { onClick } = props;
    console.log(props);
    return (
        <div className="slick-next" onClick={onClick}>
            {/* <FiChevronRight className="text-white text-2xl" /> */}
        </div>
    );
}


export default Carousel;