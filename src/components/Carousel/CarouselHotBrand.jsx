import { useState } from "react";
import Slider from "react-slick";
import hotbrand1 from '../../assets/images/hotbrand1.png'
import hotbrand2 from '../../assets/images/hotbrand2.png'
import hotbrand3 from '../../assets/images/hotbrand3.png'
const CarouselHotBrand = () => {
    const [hotBrand, setHotBrand] = useState([
        {
            name: 'hotbrand 1',
            img: hotbrand1
        },
        {
            name: 'hotbrand 2',
            img: hotbrand2
        },
        {
            name: 'hotbrand 3',
            img: hotbrand3
        },
        {
            name: 'hotbrand 4',
            img: hotbrand2
        },
        {
            name: 'hotbrand 5',
            img: hotbrand1
        },
    ]);
      const settings = {
        dots: true,
        infinite: true,
          speed: 500,
          autoplay: true,
        autoplayspeed : 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="w-11/12 md:w-10/12 mx-auto mt-10">
            <p className="border-b-2 w-32  border-b-primary pb-2 font-bold font-sans text-[24px]"><span className="text-textColor-secondary">Hot</span> <span className="text-primary ">Brands</span></p>
            <div className="carousel-container py-5 border-t-2 border-t-stroke hotbrands">
                <Slider {...settings}>
                    {
                        hotBrand.length > 0 ? (
                            hotBrand.map((item, index) => (
                                <div className="">
                                    <img src={item.img} alt={item.name} />
                                </div>
                        ))
                        ) : (
                    ''
                        )
                    }
                </Slider>  
            </div>
        </div>
    )
}


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

export default CarouselHotBrand;