import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating.js';
import { motion } from 'framer-motion';
import image1 from '../assets/company-logo-1.png'
import image2 from '../assets/company-logo-2.png'
import image3 from '../assets/company-logo-3.png'
import image4 from '../assets/company-logo-4.png'
import image5 from '../assets/company-logo-5.png'
import image6 from '../assets/company-logo-6.png'
import image7 from '../assets/company-logo-7.png'
import image8 from '../assets/company-logo-8.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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

function CompanyLogoComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    autoplay:true,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-24">
      <div>
          <Slider className="flex flex-row gap-x-6" {...settings}>
            <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image1} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image2} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image3} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image4} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image5} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image6} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image7} alt="" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className='p-10'>
                <img src={image8} alt="" />
            </div>
          </Slider>
      </div>
    </div>
  );
}

export default CompanyLogoComponent;