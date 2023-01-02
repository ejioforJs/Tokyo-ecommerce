import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/hero-slider-1.jpg';
import image2 from '../assets/hero-slider-2.jpg';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'white',
        borderRadius: '50%',
        outline: 'none',
        background: 'rgb(255,54,93)',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'white',
        background: 'rgb(255,54,93)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

export class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover:false,
      adaptiveHeight:true,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative">
            <img className='h-72 sm:h-auto' src={image1} alt="" />
            <div className="absolute top-0 left-0 mt-20 ml-5 sm:mt-52 sm:ml-10">
              <div className="text-sm mb-1.5 ">NEW COLLECTION</div>
              <div className="text-xl sm:text-3xl leading-6 font-bold">
                New Series Of <br /> Digital Watch
              </div>
              <div className="bg-main2-color px-5 py-2.5 mt-3 sm:mt-6 rounded-md text-white text-sm font-bold text-center align-middle">
              <Link to="/shop">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative">
            <img className='h-72 sm:h-auto' src={image2} alt="" />
            <div className="absolute top-0 left-0 mt-20 ml-5 sm:mt-52 sm:ml-10">
              <div className="text-sm mb-1.5">NEW COLLECTION</div>
              <div className="text-xl sm:text-3xl leading-6 font-bold">
                Best Of HiFi <br /> Loud Speaker
              </div>
              <div className="bg-main2-color px-5 py-2.5 mt-3 sm:mt-6 rounded-md text-white text-sm font-bold text-center align-middle">
                <Link to="/shop">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}