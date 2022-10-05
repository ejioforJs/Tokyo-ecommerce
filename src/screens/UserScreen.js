import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaStarOfLife } from 'react-icons/fa';
import { toast } from 'react-toastify';
import LoginUserComponent from '../components/LoginUserComponent';
import RegisterUserComponent from '../components/RegisterUserComponent';
import { Store } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function UserScreen() {
  const {search} = useLocation()
  const navigate = useNavigate()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo} = state


  useEffect(() => {
    if(userInfo){
      navigate("dashboardscreen")
    }
  }, [userInfo,navigate])

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
      <Helmet>
        <title>User login & signup</title>
      </Helmet>
      <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">CHECKOUT</p>
      </div>
      <div 
      className="mt-24 flex flex-col gap-4 justify-center items-center px-2 sm:px-10">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="border-t-2 border-main2-color bg-about-color p-3 w-full">
          <p className="text-sm">
            New customer?{' '}
            <span
              onClick={() =>
                register ? setRegister(false) : setRegister(true)
              }
              className="text-main2-color cursor-pointer"
            >
              Click here to signup
            </span>
          </p>
        </div>
        <div
          className={`${
            register ? 'max-h-102 px-2 sm:px-10' : 'max-h-0 border-white'
          } border duration-500 overflow-hidden border-gray-500 w-full`}
        >
          <RegisterUserComponent />
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="border-t-2 border-main2-color bg-about-color p-3 w-full">
          <p className="text-sm">
            Returning customer?{' '}
            <span
              onClick={() => (login ? setLogin(false) : setLogin(true))}
              className="text-main2-color cursor-pointer"
            >
              Click here to log into your account
            </span>
          </p>
        </div>
        <div
          className={`${
            login ? 'max-h-80 px-2 sm:px-10' : 'max-h-0 border-white'
          } border duration-500 overflow-hidden border-gray-500 w-full`}
        >
            <LoginUserComponent />
        </div>
      </div>
    </div>
  );
}
