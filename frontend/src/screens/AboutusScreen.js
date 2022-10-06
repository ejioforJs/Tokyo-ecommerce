import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import aboutImg from '../assets/img-about.jpg';
import aboutImg2 from '../assets/icon_about1.jpg';
import aboutImg3 from '../assets/icon_about2.jpg';
import aboutImg4 from '../assets/icon_about3.jpg';
import aboutImg5 from '../assets/icon_about4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamImg1 from '../assets/leader1.png';
import teamImg2 from '../assets/leader2.png';
import teamImg3 from '../assets/leader3.png';
import teamImg4 from '../assets/leader4.png';
import CompanyLogoComponent from '../components/CompanyLogoComponent';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';

export default function AboutusScreen() {
  const [title1, setTitle1] = useState(true);
  const [title2, setTitle2] = useState(true);
  const [title3, setTitle3] = useState(true);
  const [title4, setTitle4] = useState(true);
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>ABOUT US</title>
      </Helmet>
      <div 
      className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">ABOUT US</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 px-3 sm:px-10 mt-24 justify-center items-center">
        <img
        data-aos="fade-up"
        data-aos-duration="1500"
        src={aboutImg} alt="" />
        <div 
        className="flex flex-col gap-5">
          <p 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-3xl font-bold">ABOUT OUR HONO STORE</p>
          <p 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-md font-bold">
            We believe that every project existing in digital world is a result
            of an idea and every idea has a cause.
          </p>
          <p 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-gray-500 text-sm leading-6">
            For this reason, our each design serves an idea. Our strength in
            design is reflected by our name, our care for details. Our
            specialist won't be afraid to go extra miles just to approach near
            perfection. We don't require everything to be perfect, but we need
            them to be perfectly cared for. That's a reason why we are willing
            to give contributions at best. Not a single detail is missed out
            under Billey's professional eyes.The amount of dedication and effort
            equals to the level of passion and determination. Get better,
            together as one.
          </p>
        </div>
      </div>
      <div className="bg-about-color mt-24 px-3 sm:px-10 py-10 flex flex-col sm:flex-row gap-7 justify-center items-center">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex flex-col basis-1/2 gap-4">
          <p className="text-2xl font-bold">Functionality Meets Perfection</p>
          <p className="text-sm leading-6 text-gray-500">
            In today’s day and age, one cannot underestimate the importance of
            design, the art of creating striking visuals to move and captivate
            your audience. And as the world becomes more and more digitized with
            each passing second, the importance of graphic design has been
            rocketed to the top.
          </p>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex w-full flex-col basis-1/2 gap-8">
          <div>
            <p className="text-sm">UI/UX</p>
            <div className="h-2 flex flex-row">
              <div className="h-full basis-4/5 bg-main2-color"></div>
              <div className="h-full basis-1/5 bg-about-color2"></div>
            </div>
          </div>
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
          >
            <p className="text-sm">Ideas</p>
            <div className="h-2 flex flex-row">
              <div className="h-full basis-3/5 bg-main2-color"></div>
              <div className="h-full basis-2/5 bg-about-color2"></div>
            </div>
          </div>
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
          >
            <p className="text-sm">Design</p>
            <div className="h-2 flex flex-row">
              <div className="h-full basis-2/5 bg-main2-color"></div>
              <div className="h-full basis-3/5 bg-about-color2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-24 justify-center px-10 gap-5">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="basis-1/4 flex flex-col gap-y-4 items-center"
        >
          <img src={aboutImg2} alt="" />
          <div className="font-bold">Creative Always</div>
          <div className="text-center text-sm leading-5 text-gray-500">
            Stay creative with James and the huge collection of premade
            elements, layouts & effects.
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="basis-1/4 flex flex-col gap-y-4 items-center"
        >
          <img src={aboutImg3} alt="" />
          <div className="font-bold">Express Customization</div>
          <div className="text-center text-sm leading-5 text-gray-500">
            Easy to install and configure the theme customization in a few
            clicks with James.
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
          className="basis-1/4 flex flex-col gap-y-4 items-center"
        >
          <img src={aboutImg4} alt="" />
          <div className="font-bold">Premium Integrations</div>
          <div className="text-center text-sm leading-5 text-gray-500">
            Integrated premium plugins in Billey is the secret weapon for your
            business to thrive.
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="basis-1/4 flex flex-col gap-y-4 items-center"
        >
          <img src={aboutImg5} alt="" />
          <div className="font-bold">Real-time Editing</div>
          <div className="text-center text-sm leading-5 text-gray-500">
            Edit your work and preview the changes on the screen live with
            advanced page builder.
          </div>
        </div>
      </div>
      <div className="bg-about-color mt-24 px-10 py-12 flex flex-col sm:flex-row justify-center gap-9">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        onMouseEnter={() => setTitle1(false)}
        onMouseLeave={() => setTitle1(true)}
        className="bg-white basis-1/4 pt-5 pb-8 flex flex-col gap-5 justify-content items-center">
          <img src={teamImg1} alt="" />
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold">Ms. Veronica</p>
            <p className={`${title1 ? 'opacity-1' : 'opacity-0 translate-x-5' } duration-700 text-gray-500`}>Web Designer</p>
            <div className={` ${title1 ? 'opacity-0 translate-y-10' : 'opacity-1 translate-y-7'} flex absolute flex-row duration-700 translate-y-5 items-center text-sm gap-2.5`}>
              <span className="nav-hover">
                <FaFacebook />
              </span>
              <span className="nav-hover">
                <FaTwitter />
              </span>
              <span className="nav-hover">
                <FaInstagram />
              </span>
              <span className="nav-hover">
                <FaLinkedinIn />
              </span>
              <span className="nav-hover">
                <FaWifi />
              </span>
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        onMouseEnter={() => setTitle2(false)}
        onMouseLeave={() => setTitle2(true)}
        className="bg-white basis-1/4 pt-5 pb-8 flex flex-col gap-5 justify-content items-center">
          <img src={teamImg2} alt="" />
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold">Missa Santos</p>
            <p className={`${title2 ? 'opacity-1' : 'opacity-0 translate-x-5' } duration-700 text-gray-500`}>CEO Founder</p>
            <div className={` ${title2 ? 'opacity-0 translate-y-10' : 'opacity-1 translate-y-7'} flex absolute flex-row duration-700 translate-y-5 items-center text-sm gap-2.5`}>
              <span className="nav-hover">
                <FaFacebook />
              </span>
              <span className="nav-hover">
                <FaTwitter />
              </span>
              <span className="nav-hover">
                <FaInstagram />
              </span>
              <span className="nav-hover">
                <FaLinkedinIn />
              </span>
              <span className="nav-hover">
                <FaWifi />
              </span>
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        onMouseEnter={() => setTitle3(false)}
        onMouseLeave={() => setTitle3(true)}
        className="bg-white basis-1/4 pt-5 pb-8 flex flex-col gap-5 justify-content items-center">
          <img src={teamImg3} alt="" />
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold">Missa Santos</p>
            <p className={`${title3 ? 'opacity-1' : 'opacity-0 translate-x-5' } duration-700 text-gray-500`}>Chief Officer</p>
            <div className={` ${title3 ? 'opacity-0 translate-y-10' : 'opacity-1 translate-y-7'} flex absolute flex-row duration-700 translate-y-5 items-center text-sm gap-2.5`}>
              <span className="nav-hover">
                <FaFacebook />
              </span>
              <span className="nav-hover">
                <FaTwitter />
              </span>
              <span className="nav-hover">
                <FaInstagram />
              </span>
              <span className="nav-hover">
                <FaLinkedinIn />
              </span>
              <span className="nav-hover">
                <FaWifi />
              </span>
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        onMouseEnter={() => setTitle4(false)}
        onMouseLeave={() => setTitle4(true)}
        className="bg-white basis-1/4 pt-5 pb-8 flex flex-col gap-5 justify-content items-center">
          <img src={teamImg4} alt="" />
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-bold">Lissa Antonia</p>
            <p className={`${title4 ? 'opacity-1' : 'opacity-0 translate-x-5' } duration-700 text-gray-500`}>CTO</p>
            <div className={` ${title4 ? 'opacity-0 translate-y-10' : 'opacity-1 translate-y-7'} flex absolute flex-row duration-700 translate-y-5 items-center text-sm gap-2.5`}>
              <span className="nav-hover">
                <FaFacebook />
              </span>
              <span className="nav-hover">
                <FaTwitter />
              </span>
              <span className="nav-hover">
                <FaInstagram />
              </span>
              <span className="nav-hover">
                <FaLinkedinIn />
              </span>
              <span className="nav-hover">
                <FaWifi />
              </span>
            </div>
          </div>
        </div>
      </div>
      <CompanyLogoComponent />
    </div>
  );
}
