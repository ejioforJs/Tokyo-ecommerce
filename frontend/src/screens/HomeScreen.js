import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerComponent from '../components/BannerComponent';
import BannerComponent2 from '../components/BannerComponent2';
import BestComponentProduct from '../components/BestComponentProduct';
import BlogComponent from '../components/BlogComponent';
import CompanyLogoComponent from '../components/CompanyLogoComponent';
import NewArrivalComponentProduct from '../components/NewArrivalComponentProduct';
import { SimpleSlider } from '../components/SimpleSlider';
import ThirdComponent from '../components/ThirdComponent';

export default function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>Tokyo Electronics</title>
      </Helmet>
      <SimpleSlider />
      <ThirdComponent />
      <BannerComponent />
      <NewArrivalComponentProduct />
      <BannerComponent2 />
      <BestComponentProduct />
      <BlogComponent />
      <CompanyLogoComponent />
    </div>
  );
}
