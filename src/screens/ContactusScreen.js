import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapContainer from '../components/GoogleMapContainer';
import { IoIosCall } from 'react-icons/io';
import { GiWorld } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStarOfLife } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactusScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  const submitHandler = () => {};
  return (
    <div>
      <Helmet>
        <title>CONTACT US</title>
      </Helmet>
      <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">CONTACT US</p>
      </div>
      <div 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="h-72 w-full bg-about-color mt-24 font-bold text-lg sm:text-3xl text-center">
        GOOGLE MAP API COMING SOON.....
      </div>
      <div className="flex flex-col sm:flex-row px-2 sm:px-10 mt-24 gap-5">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex flex-col bg-about-color sm:self-start p-5 gap-4 sm:basis-1/3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 rounded-full text-md bg-main2-color text-white flex items-center justify-center">
                <span>
                  <IoIosCall />
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-gray-500">
                <p>07032888613</p>
                <p>08108195413</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 rounded-full text-md bg-main2-color text-white flex items-center justify-center">
                <span>
                  <GiWorld />
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-gray-500">
                <p>ejioforjames12@gmail.com</p>
                <p>www.jweb.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 rounded-full text-md bg-main2-color text-white flex items-center justify-center">
                <span>
                  <GoLocation />
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <p>Alaba Int Market,Lagos</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-md">Follow Us</p>
          <div className="flex flex-row gap-5 text-gray-500">
            <span className="nav-hover">
              <FaFacebookF />
            </span>
            <span className="nav-hover">
              <FaTwitter />
            </span>
            <span className="nav-hover">
              <FaLinkedinIn />
            </span>
            <span className="nav-hover">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="bg-about-color sm:basis-2/3 p-5">
          <p 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="font-bold">Get In Touch</p>
          <form 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-gray-500" onSubmit={submitHandler}>
            <div className="flex flex-col text-sm gap-3 py-4">
              <label
                className="flex flex-row gap-0.5 font-semibold"
                htmlFor="name"
              >
                Name
                <span className="medium-text">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col text-sm gap-3 py-4">
              <label
                className="flex flex-row gap-0.5 font-semibold"
                htmlFor="email"
              >
                Email
                <span className="medium-text">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col text-sm gap-3 py-4">
              <label
                className="flex flex-row gap-0.5 font-semibold"
                htmlFor="subject"
              >
                Subject
                <span className="medium-text">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                name="subject"
                type="text"
                placeholder="Your purpose of sending this message"
              />
            </div>
            <div className="flex flex-col text-sm gap-3 py-4">
              <label
                className="flex flex-row gap-0.5 font-semibold"
                htmlFor="message"
              >
                Message
                <span className="medium-text">
                  <FaStarOfLife />
                </span>
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border h-44 resize py-3 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="py-4">
              <button
                type="submit"
                className="bg-main-color text-white text-sm font-bold px-4 rounded py-2 hover:bg-main2-color duration-500"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
