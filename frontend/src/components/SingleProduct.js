import React, { Component } from 'react';
import Slider from 'react-slick';

function SingleProduct(props) {
  const { product } = props;
  const settings = {
      customPaging: function(){
          return(
              <div>
                   <img src={product.image(1)} alt=""/>
              </div>
          )
      },
          
    // customPaging: function (i) {
    //     <a>
    //       <img src={product.image1} alt="" />
    //     </a>
    // },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src={product.image1} alt="" />
        </div>
        <div>
          <img src={product.image2} alt="" />
        </div>
        <div>
          <img src={product.image3} alt="" />
        </div>
        <div>
          <img src={product.image4} alt="" />
        </div>
      </Slider>
    </div>
  );
}
