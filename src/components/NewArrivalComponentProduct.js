import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import logger from 'use-reducer-logger';
import LoadingBox from './LoadingBox.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating.js';
import {motion} from "framer-motion"
import Product from './Product.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SampleNextArrow(props) {
  useEffect(() => {
    AOS.init();
  }, []);
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
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function NewArrivalComponentProduct() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
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
      const main = []
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const results = await axios.get('/api/products');
        results.data.forEach(element => {
          if(element.component === "newArrivalComponent"){
            main.push(element)
          }
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: main });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-24">
      <div 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="ml-6 sm:ml-10 mb-4">
        <h1 className="prod-title text-3xl font-bold leading-10">
          THE NEW ARRIVALS
        </h1>
        <p className="text-sm font-normal text-gray-500 leading-8">
          Preorder now to receive exclusive deals and gifts
        </p>
      </div>
      <div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Slider className="flex flex-row gap-x-6" {...settings}>
            {products.map((product) => (
              <div
                key={product.slug}
                className="card flex flex-col cursor-pointer justify-center p-10 bg-white rounded-lg shadow-2xl"
              >
                <Product id="newProduct" product={product}></Product>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default NewArrivalComponentProduct;
