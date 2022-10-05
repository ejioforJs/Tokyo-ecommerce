import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import logger from 'use-reducer-logger';
import LoadingBox from './LoadingBox.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating.js';
import { motion } from 'framer-motion';
import Product from './Product.js';
import { BiRightArrowAlt } from 'react-icons/bi';
import AOS from 'aos';
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, blogs: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function BlogComponent() {
  const [{ loading, error, blogs }, dispatch] = useReducer(logger(reducer), {
    blogs: [],
    loading: true,
    error: '',
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide:3
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const results = await axios.get('/api/blogs');
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
    AOS.init();
  }, []);

  return (
    <div className="mt-24">
      <div 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="ml-10">
        <h1 className="prod-title text-3xl font-bold leading-10">
          THE LATEST BLOGS
        </h1>
        <p className="text-sm font-normal text-gray-500 leading-8">
          Present posts in a best way to highlight interesting moments of your
          blog.
        </p>
      </div>
      <div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Slider className="flex flex-row gap-x-6" {...settings}>
            {blogs.map((blog) => (
              <div
                key={blog._id}
                data-aos="fade-up"
                data-aos-duration="1500"
                className="group card flex flex-col cursor-pointer justify-center p-10 bg-white rounded-lg shadow-2xl"
              >
                <div className='overflow-hidden'>
                  <img className='group-hover:scale-110 duration-500' src={blog.image} alt="" />
                </div>
                <div className="text-xl font-bold mt-4">
                  <h1>{blog.title}</h1>
                </div>
                <div className="text-sm text-gray-500 mt-4 leading-6">
                  <p>{blog.smallInfo}</p>
                </div>
                <div className='flex flex-row gap-x-2 items-center text-sm font-bold mt-4'>
                  <p>
                    READ MORE{' '}
                  </p>
                  <span>
                      <BiRightArrowAlt />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default BlogComponent;
