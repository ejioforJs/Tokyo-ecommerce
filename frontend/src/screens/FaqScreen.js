import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'QUES1':
      return {
        ...state,
        ques1: true,
        ques2: false,
        ques3: false,
        ques4: false,
        ques5: false,
      };
    case 'QUES2':
      return {
        ...state,
        ques1: false,
        ques2: true,
        ques3: false,
        ques4: false,
        ques5: false,
      };
    case 'QUES3':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: true,
        ques4: false,
        ques5: false,
      };
    case 'QUES4':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: false,
        ques4: true,
        ques5: false,
      };
    case 'QUES5':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: false,
        ques4: false,
        ques5: true,
      };
    default:
      return state;
  }
};

export default function FaqScreen() {
  const [{ ques1, ques2, ques3, ques4, ques5 }, dispatch] = useReducer(
    reducer,
    {
      ques1: false,
      ques2: false,
      ques3: false,
      ques4: false,
      ques5: false,
    }
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>FREQUENTLY ASKED QUESTIONS</title>
      </Helmet>
      <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">
          FREQUENTLY ASKED QUESTIONS
        </p>
      </div>
      <div className="mt-20 px-5 sm:px-10">
        <p 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="font-bold text-lg">
          Below are frequently asked questions about our products, you may find
          the answer for yourself
        </p>
        <p 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-gray-500 text-sm leading-6 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>
      </div>
      <div className="mt-16 flex flex-col gap-2 justify-center items-center px-5 sm:px-10">
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          onClick={() => dispatch({ type: 'QUES1' })}
          className={`${
            ques1 ? 'bg-main2-color text-white' : 'bg-about-color2 text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Convenient User Interface
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          className={`${
            ques1 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          onClick={() => dispatch({ type: 'QUES2' })}
          className={`${
            ques2 ? 'bg-main2-color text-white' : 'bg-about-color2 text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Aliquid esse atque eveniet fugiat ullam
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          className={`${
            ques2 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          onClick={() => dispatch({ type: 'QUES3' })}
          className={`${
            ques3 ? 'bg-main2-color text-white' : 'bg-about-color2 text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Tenetur, facilis neque error earum facere exercitationem!
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          className={`${
            ques3 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          onClick={() => dispatch({ type: 'QUES4' })}
          className={`${
            ques4 ? 'bg-main2-color text-white' : 'bg-about-color2 text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Perspiciatis ut ipsa cum molestias quaerat laborum.
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          className={`${
            ques4 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          onClick={() => dispatch({ type: 'QUES5' })}
          className={`${
            ques5 ? 'bg-main2-color text-white' : 'bg-about-color2 text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Responsive Design
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
          className={`${
            ques5 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
      </div>
    </div>
  );
}
