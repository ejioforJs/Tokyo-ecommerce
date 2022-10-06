import React, { useEffect } from 'react';
import image1 from '../assets/banner-style-8-img-1.jpg';
import image2 from '../assets/banner-style-8-img-2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BannerComponent2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full mt-24 flex flex-col sm:flex-row">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="cursor-pointer"
      >
        <img src={image1} alt="" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        className="cursor-pointer"
      >
        <img src={image2} alt="" />
      </div>
    </div>
  );
}