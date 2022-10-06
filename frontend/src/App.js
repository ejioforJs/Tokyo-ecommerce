import './App.css';
import React, { useContext, useState } from 'react';
import './index.css';
import logo from './assets/mainLogo.png';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { SimpleSlider } from './components/SimpleSlider';
// import ThirdComponent from './components/ThirdComponent';
// import BannerComponent from './components/BannerComponent';
// import NewArrivalComponentProduct from './components/NewArrivalComponentProduct';
// import BannerComponent2 from './components/BannerComponent2';
// import BestComponentProduct from './components/BestComponentProduct';
// import BlogComponent from './components/BlogComponent';
// import CompanyLogoComponent from './components/CompanyLogoComponent';
import HomeScreen from './screens/HomeScreen';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import ProductScreen from './screens/ProductScreen';
import { Store } from './Store.js';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from './components/SidebarCart';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
// import { BiDownArrow } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
// import { createPopper } from '@popperjs/core';
import AboutusScreen from './screens/AboutusScreen';
import ContactusScreen from './screens/ContactusScreen';
import UserScreen from './screens/UserScreen'
import DashboardScreen from './screens/DashboardScreen'
import FaqScreen from './screens/FaqScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import ShopScreen from './screens/ShopScreen';
import { Tooltip } from '@chakra-ui/react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App({ color }) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [accountdropdown, setAccountdropdown] = useState(false);
  // bg colors
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    wishlist,
  } = state;
  const [sidecart, setSidecart] = useState(false);
  const [sidewish, setSidewish] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [sidesearch, setSidesearch] = useState(false);
  const [search, setSearch] = useState('')

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const removeWishHandler = (item) => {
    ctxDispatch({ type: 'WISH_REMOVE_ITEM', payload: item });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
  //   localStorage.clear()
  // },[])
  window.onbeforeunload = function() {
    localStorage.clear()
  }

  return (
    <BrowserRouter>
      <div className="font-good-font text-gray-800">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        ></ToastContainer>
        <Tooltip label="Hello?? do you need help?? click here to chat me up!!" showDelay="8000" hasArrow placement="left">
          <div className='z-50 cursor-pointer fixed block shadow-lg text-main2-color bottom-8 right-8 text-5xl'>
          <a href="https://wa.me/2348075721644"><BsFillChatDotsFill /></a> 
        </div>
        </Tooltip>
        <div className={`fixed ${sidecart || sidewish || sidenav ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} inset-0 bg-sidebar-overlay duration-500 z-50 bg-opacity-50 overflow-y-auto h-full w-full`}></div>
        <div
        className={`fixed flex items-center justify-center ${
          sidesearch ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } inset-0 bg-search duration-500 z-50 bg-opacity-50 overflow-y-auto h-full w-full`}
      >
        <div
            onClick={() => setSidesearch(false)}
            className="absolute text-white nav-hover top-10 cursor-pointer right-8 font-bold text-2xl"
          >
            <AiOutlineClose className='font-bold' />
          </div>
        <div className="text-gray-500 w-full">
            <div className="flex justify-center flex-col text-sm gap-3 py-4 w-full">
              <input
                required
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="border-2 border-transparent text-center text-xl text-white border-b-white py-2 outline-none bg-transparent mx-auto w-4/5 duration-500 focus:border-b-main2-color"
                name="search"
                type="text"
                placeholder="type keyword(s) here"
              />
            </div>
            <div onClick={() => setSidesearch(false)} className="flex justify-center flex-col text-sm gap-3 py-4 w-full">
              <Link
                to="/shop"
                className="bg-main2-color outline-none mx-auto text-white text-sm font-bold px-7 rounded py-3 hover:bg-transparent hover:border-2 hover:border-main2-color duration-500"
              >
                SEARCH
              </Link>
            </div>
            </div>
      </div>
        <header className="sticky top-0 z-40">
          <div className="w-full bg-main-color py-5 flex flex-row justify-between">
            <div className="basis-1/4 pl-4 lg:pl-auto justify-start lg:justify-center flex items-center grow shrink">
              <img src={logo} alt="logo" className="w-28 sm:w-32 h-8 cursor-pointer" />
            </div>
            <ul className="hidden text-sm items-center font-bold justify-between lg:flex flex-row basis-2/4 grow shrink">
              <li className="text-white nav-hover">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-white nav-hover">
                <Link to="/shop">SHOP</Link>
              </li>
              <li
              onMouseLeave={() => {
                setDropdownPopoverShow(false);
              }}>
                <li
                  onMouseEnter={() => {
                    // dropdownPopoverShow/
                    setDropdownPopoverShow(true);
                    // : openDropdownPopover();
                  }}
                  className="nav-hover text-white flex flex-row gap-1 items-center"
                >
                  <span>PAGES</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </li>
                <div
                  className={`bg-white text-base absolute z-0 overflow-hidden duration-1000 rounded shadow-xl mb-1
          ${dropdownPopoverShow ? 'max-h-40 py-4 px-6' : 'max-h-0'}`}
                >
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="dropdown-text"><Link to="/faqs">Frequently Questions</Link></li>
                    <li className="dropdown-text"><Link to="/privacyPolicy">Privacy Policy</Link></li>
                    <li className="dropdown-text"><Link to="/dashboardscreen">Dashboard</Link></li>
                  </ul>
                </div>
                {/* </div> */}
              </li>
              <li
              onMouseLeave={() => {
                setAccountdropdown(false);
              }}>
                <li
                  onMouseEnter={() => {
                    // dropdownPopoverShow
                    setAccountdropdown(true);
                    // : openDropdownPopover();
                  }}
                  className="nav-hover text-white flex flex-row gap-1 items-center"
                >
                  <span>ACCOUNT</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </li>
                <div
                  className={`bg-white text-base absolute z-0 overflow-hidden duration-1000 rounded shadow-xl mb-1
          ${accountdropdown ? 'max-h-40 py-4 px-6' : 'max-h-0'}`}
                >
                  <ul className="flex flex-col gap-3 text-sm">
                    <li className="dropdown-text"><Link to="/userscreen">Login/Signup</Link></li>
                    <li className="dropdown-text"><Link to="/dashboardscreen">Dashboard</Link></li>
                  </ul>
                </div>
                {/* </div> */}
              </li>
              <li className="nav-hover text-white">
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li className="nav-hover text-white">
                <Link to="/contactus">CONTACT US</Link>
              </li>
            </ul>
            <ul className="text-white items-center flex flex-row text-2xl font-medium justify-end lg:justify-center gap-x-6 sm:gap-x-7 pr-4 sm:pr-5 basis-2/4 sm:basis-1/4 grow shrink">
              <li
                onClick={() => setSidewish(!sidewish)}
                className="nav-hover relative"
              >
                <AiOutlineHeart />
                {wishlist.length > 0 && (
                  <div className="absolute w-5 h-5 bg-main2-color text-sm top-3 left-3 rounded-full font-bold text-white">
                    <div className="flex items-center justify-center ">
                      {wishlist.length}
                    </div>
                  </div>
                )}
              </li>
              <li
                onClick={() => setSidecart(!sidecart)}
                className="nav-hover relative"
              >
                <AiOutlineShoppingCart />
                {cartItems.length > 0 && (
                  <div className="absolute w-5 h-5 bg-main2-color text-sm top-3 left-4 rounded-full font-bold text-white">
                    <div className="flex items-center justify-center ">
                      {cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </div>
                  </div>
                )}
              </li>
              <li 
              onClick={() => setSidesearch(!sidesearch)}
              className="nav-hover">
                <AiOutlineSearch />
              </li>
              <li
                onClick={() => setSidenav(!sidenav)}
                className="nav-hover flex items-center justify-center bg-menu-color w-12 h-12 rounded-full duration-500 hover:text-main2-color hover:bg-menu2-color"
              >
                <GiHamburgerMenu />
              </li>
            </ul>
          </div>
        </header>
        <div
          className={`sm:w-96 w-80 h-screen shadow-md bg-white overflow-scroll duration-500 right-0 top-0 fixed z-50 ${
            sidecart ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div
            onClick={() => setSidecart(false)}
            className="absolute nav-hover top-6 cursor-pointer right-8 font-bold text-2xl"
          >
            <AiOutlineClose />
          </div>
          <ul className="mt-12 flex flex-col gap-4 p-5">
            <li className="text-xl mb-4">Shopping Cart</li>
            {cartItems.map((cartitem) => (
              <li
                className="flex flex-row items-center gap-5 text-gray-500"
                key={cartitem._id}
              >
                <div className="flex flex-row">
                  <img className="h-24 w-20" src={cartitem.image1} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{cartitem.name}</p>
                  <p className="flex flex-row gap-2 text-sm">{`${
                    cartitem.quantity
                  } x ${'$' + cartitem.price}`}</p>
                </div>
                <div
                  onClick={() => removeItemHandler(cartitem)}
                  className="text-red-500 right-4 cursor-pointer absolute"
                >
                  <AiFillDelete />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between p-5 items-center text-xl text-gray-500">
            <p className='font-bold'>Subtotal:</p>
            <p>$ {cartItems.reduce((a,c) => a + c.price*c.quantity,0)}</p>
          </div>
          <div className="p-5">
          <div className='py-2 bg-main2-color text-white font-bold text-center rounded-md'>
            <Link to="/userscreen">
              CHECKOUT
            </Link>
          </div>
          </div>
        </div>
        <div
          className={`sm:w-96 w-80 h-screen shadow-md bg-white overflow-scroll duration-500 right-0 top-0 fixed z-50 ${
            sidewish ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div
            onClick={() => setSidewish(false)}
            className="absolute nav-hover top-6 cursor-pointer right-8 font-bold text-2xl"
          >
            <AiOutlineClose />
          </div>
          <ul className="mt-12 flex flex-col gap-4 p-5">
            <li className="text-xl mb-4">Wishlist</li>
            {wishlist.map((wishitem) => (
              <li
                className="flex flex-row items-center gap-5 text-gray-500"
                key={wishitem._id}
              >
                <div className="flex flex-row">
                  <img className="h-24 w-20" src={wishitem.image1} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{wishitem.name}</p>
                  <p className="flex flex-row gap-2 text-sm">{`${
                    '$' + wishitem.price
                  }`}</p>
                </div>
                <div
                  onClick={() => removeWishHandler(wishitem)}
                  className="text-red-500 right-4 cursor-pointer absolute"
                >
                  <AiFillDelete />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`sm:w-96 w-80 h-screen shadow-md text-white bg-main-color overflow-scroll duration-500 right-0 top-0 fixed z-50 ${
            sidenav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div
            onClick={() => setSidenav(false)}
            className="absolute nav-hover top-6 cursor-pointer right-8 font-bold text-2xl"
          >
            <AiOutlineClose />
          </div>
          <ul className="lg:hidden flex flex-col pl-8 mt-16 gap-3">
            <li onClick={() => setSidenav(false)} 
            className="nav-hover"><Link to="/">HOME</Link></li>
            <li 
            onClick={() => setSidenav(false)}
            className="nav-hover"><Link to="/shop">SHOP</Link></li>
            <li
              onMouseLeave={() => {
                setDropdownPopoverShow(!dropdownPopoverShow);
              }}>
                <li
                  onMouseEnter={() => {
                    // dropdownPopoverShow/
                    setDropdownPopoverShow(!dropdownPopoverShow);
                    // : openDropdownPopover();
                  }}
                  className="nav-hover text-white flex flex-row gap-1 items-center"
                >
                  <span>PAGES</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </li>
                <div
                  className={`bg-white text-base absolute z-0 overflow-hidden duration-1000 rounded shadow-xl mb-1
          ${dropdownPopoverShow ? 'max-h-40 py-4 px-6' : 'max-h-0'}`}
                >
                  <ul className="flex flex-col gap-3 text-sm text-black">
                    <li 
                    onClick={() => setSidenav(false)}
                    className="dropdown-text"><Link to="/faqs">Frequently Questions</Link></li>
                    <li 
                    onClick={() => setSidenav(false)}
                    className="dropdown-text"><Link to="/privacyPolicy">Privacy Policy</Link></li>
                    <li 
                    onClick={() => setSidenav(false)}
                    className="dropdown-text"><Link to="/dashboardscreen">Dashboard</Link></li>
                  </ul>
                </div>
                {/* </div> */}
              </li>
              <li
              onMouseLeave={() => {
                setAccountdropdown(false);
              }}>
                <li
                  onMouseEnter={() => {
                    // dropdownPopoverShow
                    setAccountdropdown(true);
                    // : openDropdownPopover();
                  }}
                  className="nav-hover text-white flex flex-row gap-1 items-center"
                >
                  <span>ACCOUNT</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </li>
                <div
                  className={`bg-white text-base absolute z-0 overflow-hidden duration-1000 rounded shadow-xl mb-1
          ${accountdropdown ? 'max-h-40 py-4 px-6' : 'max-h-0'}`}
                >
                  <ul className="flex flex-col gap-3 text-sm text-black">
                    <li 
                    onClick={() => setSidenav(false)}
                    className="dropdown-text"><Link to="/userscreen">Login/Signup</Link></li>
                    <li 
                    onClick={() => setSidenav(false)}
                    className="dropdown-text"><Link to="/dashboardscreen">Dashboard</Link></li>
                  </ul>
                </div>
                {/* </div> */}
              </li>
            <li 
            onClick={() => setSidenav(false)}
            className="nav-hover"><Link to="/aboutus">ABOUT US</Link></li>
            <li 
            onClick={() => setSidenav(false)}
            className="nav-hover"><Link to="/contactus">CONTACT US</Link></li>
          </ul>
          <div className="flex flex-col gap-7 justify-center items-center mt-10 sm:mt-24 px-5">
            <div>
              <img src={logo} className="w-32 h-8" alt="logo" />
            </div>
            <div className="leading-4 items-center flex flex-col text-white text-sm">
              <p>Address: odim street along obukpa road.</p>
              <br />
              <p>Call Us: 09013906114,07032888613.</p>
              <br />
              <p>Email: Ejioforjames12@gmail.com</p>
            </div>
            <div className="flex flex-row gap-x-6">
              <div className="footer-icon">
                <FaFacebookF />
              </div>
              <div className="footer-icon">
                <FaTwitter />
              </div>
              <div className="footer-icon">
                <FaInstagram />
              </div>
              <div className="footer-icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen sidecart={sidecart} setSidecart={setSidecart} />} />
            <Route path="/aboutus" element={<AboutusScreen />} />
            <Route path="/contactus" element={<ContactusScreen />} />
            <Route path="/userscreen" element={<UserScreen />} />
            <Route path="/dashboardscreen" element={<DashboardScreen />} />
            <Route path="/faqs" element={<FaqScreen />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicyScreen />} /> 
            <Route path="/shop" element={<ShopScreen search={search} setSearch={setSearch} itemsPerPage={4} />} />
          </Routes>
        </div>
        <footer className="bg-main-color p-4 sm:p-10 mt-20">
          <div className="flex flex-col sm:flex-row justify-between gap-y-8">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-2 basis-1/5">
              <div className="text-white font-bold">
                <p>INFORMATION</p>
              </div>
              <hr className="border-2 border-main2-color w-16" />
              <div className="text-footer-color flex flex-col gap-y-2 text-sm mt-2">
                <p className="footer-text">Delivery Infomation</p>
                <p className="footer-text">Terms & Conditions</p>
                <p className="footer-text">Contact</p>
                <p className="footer-text">Returns</p>
              </div>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-2 basis-1/5">
              <div className="text-white font-bold">
                <p>MY ACCOUNT</p>
              </div>
              <hr className="border-2 border-main2-color w-16" />
              <div className="text-footer-color flex flex-col gap-y-2 text-sm mt-2">
                <p className="footer-text">My account</p>
                <p className="footer-text">Wishlist</p>
                <p className="footer-text">Privacy Policy</p>
                <p className="footer-text">Frequently Asked Questions</p>
                <p className="footer-text">Order History</p>
              </div>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-2 basis-1/5">
              <div className="text-white font-bold">
                <p>CATEGORIES</p>
              </div>
              <hr className="border-2 border-main2-color w-16" />
              <div className="text-footer-color flex flex-col gap-y-2 text-sm mt-2">
                <p className="footer-text">Decorative</p>
                <p className="footer-text">Kitchen utensils</p>
                <p className="footer-text">Chair and Bar stools</p>
                <p className="footer-text">Sofas and Armchairs</p>
                <p className="footer-text">Interior Lighting</p>
              </div>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-2 basis-1/5">
              <div className="text-white font-bold">
                <p>ABOUT US</p>
              </div>
              <hr className="border-2 border-main2-color w-16" />
              <div className="text-footer-color flex flex-col gap-y-2 text-sm mt-2">
                <p className="leading-6">
                  We are a team of designers and developers that create high
                  quality Magento, Prestashop, Opencart.
                </p>
                <p className="leading-6 mt-2">
                  Address: Your address goes here. Email: demo@example.com
                </p>
              </div>
            </div>
          </div>
          <hr className="border-1 border-gray-500 mt-12" />
          <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-4">
              <p className="text-white font-bold">FOLLOW US</p>
              <div className="flex flex-row gap-x-4">
                <div className="footer-icon">
                  <FaFacebookF />
                </div>
                <div className="footer-icon">
                  <FaTwitter />
                </div>
                <div className="footer-icon">
                  <FaInstagram />
                </div>
                <div className="footer-icon">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-4">
              <p className="text-white font-bold">
                DON'T MISS OUT ON THE LATEST PRODUCTS
              </p>
              <div className="flex flex-row">
                <input
                  className="text-sm w-96 p-3 border-solid outline-none rounded-l-md duration-500 border-footer-color focus:border-main2-color border-t-2 border-l-2 border-b-2 bg-main-color text-footer-color"
                  type="text"
                />
                <button className="p-3 bg-main2-color duration-500 hover:bg-white rounded-r-md text-white hover:text-main2-color text-sm font-bold">
                  SUBSCRIBE!
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="border-1 border-gray-500 mt-8 sm:mt-12" />
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-12">
            <div className="text-footer-color text-sm">
              © 2022 <span className="text-white">TOKYOELECTRONICS.</span> MADE
              WITH vscode BY <span className="text-white">JWEBOSS</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
