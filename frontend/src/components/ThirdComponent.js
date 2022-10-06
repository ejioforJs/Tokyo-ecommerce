import React, { useEffect } from 'react';
import image1 from '../assets/service-promo-5.png';
import image2 from '../assets/service-promo-6.png';
import image3 from '../assets/service-promo-7.png';
import image4 from '../assets/service-promo-8.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ThirdComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row mt-24 justify-center px-5 sm:px-10 gap-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="basis-1/4 flex flex-col gap-y-4 items-center"
      >
        <img src={image1} alt="" />
        <div className="font-bold">FREE SHIPPING</div>
        <div className="text-center text-sm leading-5 text-gray-500">
          Get 10% cash back, free shipping, free returns, and more at 1000+ top
          retailers!
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        className="basis-1/4 flex flex-col gap-y-4 items-center"
      >
        <img src={image2} alt="" />
        <div className="font-bold">30 DAYS MONEY BACK</div>
        <div className="text-center text-sm leading-5 text-gray-500">
          100% satisfaction guaranteed, or get your money back within 30 days!
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
        className="basis-1/4 flex flex-col gap-y-4 items-center"
      >
        <img src={image3} alt="" />
        <div className="font-bold">SAFE PAYMENT</div>
        <div className="text-center text-sm leading-5 text-gray-500">
          Pay with the world's most popular and secure payment methods
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="600"
        className="basis-1/4 flex flex-col gap-y-4 items-center"
      >
        <img src={image4} alt="" />
        <div className="font-bold">LOYALTY CUSTOMER</div>
        <div className="text-center text-sm leading-5 text-gray-500">
          Card for the other 30% of their purchases at a rate of 1% cash back.
        </div>
      </div>
    </div>
  );
}
