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
      <div className="text-gray-800 font-good-font">
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
          <div className='fixed z-50 block text-5xl shadow-lg cursor-pointer text-main2-color bottom-8 right-8'>
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
            className="absolute text-2xl font-bold text-white cursor-pointer nav-hover top-10 right-8"
          >
            <AiOutlineClose className='font-bold' />
          </div>
        <div className="w-full text-gray-500">
            <div className="flex flex-col justify-center w-full gap-3 py-4 text-sm">
              <input
                required
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="w-4/5 py-2 mx-auto text-xl text-center text-white duration-500 bg-transparent border-2 border-transparent outline-none border-b-white focus:border-b-main2-color"
                name="search"
                type="text"
                placeholder="type keyword(s) here"
              />
            </div>
            <div onClick={() => setSidesearch(false)} className="flex flex-col justify-center w-full gap-3 py-4 text-sm">
              <Link
                to="/shop"
                className="py-3 mx-auto text-sm font-bold text-white duration-500 rounded outline-none bg-main2-color px-7 hover:bg-transparent hover:border-2 hover:border-main2-color"
              >
                SEARCH
              </Link>
            </div>
            </div>
      </div>
        <header className="sticky top-0 z-40">
          <div className="flex flex-row justify-between w-full py-5 bg-main-color">
            <div className="flex items-center justify-start pl-4 basis-1/4 lg:pl-auto lg:justify-center grow shrink">
              <img src={logo} alt="logo" className="h-8 cursor-pointer w-28 sm:w-32" />
            </div>
            <ul className="flex-row items-center justify-between hidden text-sm font-bold lg:flex basis-2/4 grow shrink">
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
                  className="flex flex-row items-center gap-1 text-white nav-hover"
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
                  className="flex flex-row items-center gap-1 text-white nav-hover"
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
              <li className="text-white nav-hover">
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li className="text-white nav-hover">
                <Link to="/contactus">CONTACT US</Link>
              </li>
            </ul>
            <ul className="flex flex-row items-center justify-end pr-4 text-2xl font-medium text-white lg:justify-center gap-x-6 sm:gap-x-7 sm:pr-5 basis-2/4 sm:basis-1/4 grow shrink">
              <li
                onClick={() => setSidewish(!sidewish)}
                className="relative nav-hover"
              >
                <AiOutlineHeart />
                {wishlist.length > 0 && (
                  <div className="absolute w-5 h-5 text-sm font-bold text-white rounded-full bg-main2-color top-3 left-3">
                    <div className="flex items-center justify-center ">
                      {wishlist.length}
                    </div>
                  </div>
                )}
              </li>
              <li
                onClick={() => setSidecart(!sidecart)}
                className="relative nav-hover"
              >
                <AiOutlineShoppingCart />
                {cartItems.length > 0 && (
                  <div className="absolute w-5 h-5 text-sm font-bold text-white rounded-full bg-main2-color top-3 left-4">
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
                className="flex items-center justify-center w-12 h-12 duration-500 rounded-full nav-hover bg-menu-color hover:text-main2-color hover:bg-menu2-color"
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
            className="absolute text-2xl font-bold cursor-pointer nav-hover top-6 right-8"
          >
            <AiOutlineClose />
          </div>
          <ul className="flex flex-col gap-4 p-5 mt-12">
            <li className="mb-4 text-xl">Shopping Cart</li>
            {cartItems.map((cartitem) => (
              <li
                className="flex flex-row items-center gap-5 text-gray-500"
                key={cartitem._id}
              >
                <div className="flex flex-row">
                  <img className="w-20 h-24" src={cartitem.image1} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{cartitem.name}</p>
                  <p className="flex flex-row gap-2 text-sm">{`${
                    cartitem.quantity
                  } x ${'$' + cartitem.price}`}</p>
                </div>
                <div
                  onClick={() => removeItemHandler(cartitem)}
                  className="absolute text-red-500 cursor-pointer right-4"
                >
                  <AiFillDelete />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-between p-5 text-xl text-gray-500">
            <p className='font-bold'>Subtotal:</p>
            <p>$ {cartItems.reduce((a,c) => a + c.price*c.quantity,0)}</p>
          </div>
          <div className="p-5">
          <div className='py-2 font-bold text-center text-white rounded-md bg-main2-color'>
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
            className="absolute text-2xl font-bold cursor-pointer nav-hover top-6 right-8"
          >
            <AiOutlineClose />
          </div>
          <ul className="flex flex-col gap-4 p-5 mt-12">
            <li className="mb-4 text-xl">Wishlist</li>
            {wishlist.map((wishitem) => (
              <li
                className="flex flex-row items-center gap-5 text-gray-500"
                key={wishitem._id}
              >
                <div className="flex flex-row">
                  <img className="w-20 h-24" src={wishitem.image1} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{wishitem.name}</p>
                  <p className="flex flex-row gap-2 text-sm">{`${
                    '$' + wishitem.price
                  }`}</p>
                </div>
                <div
                  onClick={() => removeWishHandler(wishitem)}
                  className="absolute text-red-500 cursor-pointer right-4"
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
            className="absolute text-2xl font-bold cursor-pointer nav-hover top-6 right-8"
          >
            <AiOutlineClose />
          </div>
          <ul className="flex flex-col gap-3 pl-8 mt-16 lg:hidden">
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
                  className="flex flex-row items-center gap-1 text-white nav-hover"
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
                  className="flex flex-row items-center gap-1 text-white nav-hover"
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
          <div className="flex flex-col items-center justify-center px-5 mt-10 gap-7 sm:mt-24">
            <div>
              <img src={logo} className="w-32 h-8" alt="logo" />
            </div>
            <div className="flex flex-col items-center text-sm leading-4 text-white">
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
        <footer className="p-4 mt-20 bg-main-color sm:p-10">
          <div className="flex flex-col justify-between sm:flex-row gap-y-8">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-2 basis-1/5">
              <div className="font-bold text-white">
                <p>INFORMATION</p>
              </div>
              <hr className="w-16 border-2 border-main2-color" />
              <div className="flex flex-col mt-2 text-sm text-footer-color gap-y-2">
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
              <div className="font-bold text-white">
                <p>MY ACCOUNT</p>
              </div>
              <hr className="w-16 border-2 border-main2-color" />
              <div className="flex flex-col mt-2 text-sm text-footer-color gap-y-2">
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
              <div className="font-bold text-white">
                <p>CATEGORIES</p>
              </div>
              <hr className="w-16 border-2 border-main2-color" />
              <div className="flex flex-col mt-2 text-sm text-footer-color gap-y-2">
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
              <div className="font-bold text-white">
                <p>ABOUT US</p>
              </div>
              <hr className="w-16 border-2 border-main2-color" />
              <div className="flex flex-col mt-2 text-sm text-footer-color gap-y-2">
                <p className="leading-6">
                  We are a team of designers and developers that create high
                  quality Magento, Prestashop, Opencart.
                </p>
                <p className="mt-2 leading-6">
                  Address: Your address goes here. Email: demo@example.com
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-12 border-gray-500 border-1" />
          <div className="flex flex-col gap-8 mt-12 sm:flex-row sm:gap-14">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col gap-y-4">
              <p className="font-bold text-white">FOLLOW US</p>
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
              <p className="font-bold text-white">
                DON'T MISS OUT ON THE LATEST PRODUCTS
              </p>
              <div className="flex flex-row">
                <input
                  className="p-3 text-sm duration-500 border-t-2 border-b-2 border-l-2 border-solid outline-none w-96 rounded-l-md border-footer-color focus:border-main2-color bg-main-color text-footer-color"
                  type="text"
                />
                <button className="p-3 text-sm font-bold text-white duration-500 bg-main2-color hover:bg-white rounded-r-md hover:text-main2-color">
                  SUBSCRIBE!
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="mt-8 border-gray-500 border-1 sm:mt-12" />
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-12">
            <div className="text-sm text-footer-color">
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
