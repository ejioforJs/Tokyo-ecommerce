import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import Rating from '../components/Rating';
import SingleProduct from '../components/SingleProduct';
import { getError } from '../utils.js';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Store } from '../Store';
import { FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaStarOfLife, FaRegStar } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import ProductRating from '../components/ProductRating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DESCRIPTION_SUCCESS':
      return {
        ...state,
        description: true,
        specification: false,
        reviews: false,
      };
    case 'SPECIFICATION_SUCCESS':
      return {
        ...state,
        description: false,
        specification: true,
        reviews: false,
      };
    case 'REVIEWS_SUCCESS':
      return {
        ...state,
        description: false,
        specification: false,
        reviews: true,
      };
    case 'RATING_ONE':
      return {
        ...state,
        rating1: true,
        rating2: false,
        rating3: false,
        rating4: false,
        rating5: false,
      };
    case 'RATING_TWO':
      return {
        ...state,
        rating1: false,
        rating2: true,
        rating3: false,
        rating4: false,
        rating5: false,
      };
    case 'RATING_THREE':
      return {
        ...state,
        rating1: false,
        rating2: false,
        rating3: true,
        rating4: false,
        rating5: false,
      };
    case 'RATING_FOUR':
      return {
        ...state,
        rating1: false,
        rating2: false,
        rating3: false,
        rating4: true,
        rating5: false,
      };
    case 'RATING_FIVE':
      return {
        ...state,
        rating1: false,
        rating2: false,
        rating3: false,
        rating4: false,
        rating5: true,
      };
    default:
      return state;
  }
};

export default function ProductScreen({sidecart, setSidecart}) {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [
    {
      loading,
      error,
      product,
      description,
      specification,
      reviews,
      rating1,
      rating2,
      rating3,
      rating4,
      rating5,
    },
    dispatch,
  ] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
    description: true,
    specification: false,
    reviews: false,
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false,
    rating5: false,
  });

  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const results = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
    AOS.init();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { cartItems },
    wishlist,
  } = state;

  const currentItem = cartItems.find((x) => x._id === product._id);

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [viewCart, setViewCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${product._id}`);
    if (product.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        ...product,
        quantity,
        // date: new Date().toLocaleString('en-US', {
        //   month: 'long',
        //   day: 'numeric',
        //   year: 'numeric',
        // }),
      },
    });
    setShowModal(true);
    // navigate('/cart');
  };

  const addToWishlistHandler = async () => {
    const existItem = wishlist.find((x) => x._id === product._id);
    if (existItem) {
      toast.error('product already in your wishlist');
      return;
    }
    ctxDispatch({
      type: 'WISHLIST_ADD_ITEM',
      payload: product,
    });
  };

  const updateCartHandler = async (currentItem, quantity) => {
    // const { data } = await axios.get(`/api/products/${currentItem._id}`);
    if (product.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        ...currentItem,
        quantity,
        // date: new Date().toLocaleString('en-US', {
        //   month: 'long',
        //   day: 'numeric',
        //   year: 'numeric',
        // }),
      },
    });
  };

  const submitHandler = async () => {
    window.location.reload(false)
    const id = product._id;
    try {
      const {data} = await axios.post('/api/products/reviews', {
        id,
        name,
        review,
        rating,
      });
    } catch (err) {
      toast.error(getError(err));
    }
    // setName('')
    // setReview('')
    // setRating(0)
    // navigate(`/product/${product.slug}`);
    // window.location.reload()
    // console.log(product)
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <div
        className={`fixed flex items-center justify-center ${
          showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } inset-0 bg-gray-600 duration-500 z-50 bg-opacity-50 overflow-y-auto h-full w-full`}
      >
        <div className="bg-white p-5 sm:p-10 flex flex-col sm:flex-row relative">
          <div className='mb-5 sm:mb-auto'>
            <img className="h-24 w-20" src={product.image1} alt="" />
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 sm:ml-4">
            <div className="flex flex-row items-center gap-x-2">
              <span className="bg-main2-color p-0.5 text-xs rounded text-white">
                <ImCheckmark />
              </span>
              <p className="text-sm text-gray-500">
                Added to cart successfully
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <div
              onClick={() => { setShowModal(false) ; setSidecart(true)}}
              className="bg-main-color px-2 py-1.5 hover:bg-main2-color duration-500 cursor-pointer text-sm text-white">
                View Cart
              </div>
              <div
                onClick={() =>
                  navigate('/userscreen')
                }
                className="bg-main-color px-2 py-1.5 hover:bg-main2-color duration-500 cursor-pointer text-sm text-white"
              >
                Checkout
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 sm:mt-auto gap-2 sm:gap-3 sm:ml-12 sm:border-l sm:pl-4 mr-16 border-gray-400">
            <p className="text-sm text-gray-500 font-bold">
              There are {cartItems.reduce((a, c) => a + c.quantity, 0)} items in
              your Cart
            </p>
            <p className="text-sm text-gray-500 font-bold">
              TOTAL PRICE: $
              {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
            </p>
            <p onClick={() => setShowModal(false)} className="text-main2-color underline text-sm cursor-pointer">
              CONTINUE SHOPPING
            </p>
          </div>
          <div
            className="absolute top-4 right-4 border ml-10 text-gray-500 font-bold cursor-pointer duration-500 border-gray-500 hover:text-main2-color hover:border-main2-color rounded p-2.5"
            onClick={() => setShowModal(false)}
          >
            <AiOutlineClose className="font-bold" />
          </div>
        </div>
      </div>
      <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">PRODUCT DETAILS</p>
      </div>
      <div className="px-4 sm:px-10 mt-24 flex flex-col sm:flex-row gap-8">
        <div 
        data-aos="fade-up"
        data-aos-duration="1500"
        className="basis-2/5">
          <img src={product.image1} alt="" />
        </div>
        <div className="basis-3/5">
          <div className="flex flex-col gap-2">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl font-semibold ">{product.name}</div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-row gap-x-3 text-sm">
              <ProductRating product={product} />
              <span>(customer review)</span>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-xl">${product.price}</div>
          </div>
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-6 text-sm text-gray-500">{product.deepInfo}</div>
          <hr className="border-1 border-gray-400 mt-8" />
          <div className="mt-7">
            <h1 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="font-bold text-md">Available Options</h1>
            {product.countInStock === 0 ? (
              <div>out of stock</div>
            ) : (
              <div 
              data-aos="fade-up"
        data-aos-duration="1500"
              className="flex items-center gap-x-2 mt-3">
                <span>
                  <AiFillCheckCircle />
                </span>{' '}
                <span className="text-gray-500 font-semibold">
                  {product.countInStock} IN STOCK
                </span>
              </div>
            )}
          </div>
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mt-3 text-sm font-bold link-underline link-underline-black w-fit">
            Quantity
          </div>
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-row items-center gap-x-3 mt-1">
            {currentItem ? (
              <div>
                <button
                  onClick={() =>
                    updateCartHandler(currentItem, currentItem.quantity - 1)
                  }
                  disabled={currentItem.quantity === 0}
                >
                  <i className="fas fa-minus-circle"></i>
                </button>{' '}
                <span>{currentItem.quantity}</span>{' '}
                <button
                  onClick={() =>
                    updateCartHandler(currentItem, currentItem.quantity + 1)
                  }
                  // disabled={currentItem.quantity === currentItem.countInStock}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>{' '}
              </div>
             ) : (
              <div className="bg-red-500 text-white p-2">
                No items in your cart
              </div>
            )} 
            <button
            data-aos="fade-up"
            data-aos-duration="1500"

              onClick={addToCartHandler}
              className="px-6 text-sm font-semibold text-white bg-main2-color border-none py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-white hover:text-main2-color hover:border-2 hover:border-solid hover:border-main2-color "
            >
              Add to cart
            </button>
          </div>
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
            onClick={addToWishlistHandler}
            className="flex flex-row gap-x-1.5 text-gray-500 nav-hover items-center text-sm mt-3 cursor-pointer"
          >
            <FaRegHeart /> Add to wishlist
          </div>
          <hr className="border-1 border-gray-400 mt-8" />
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-row gap-x-2 items-center mt-4">
            <p className="text-sm text-gray-500">CATEGORIES:</p>{' '}
            <p className="text-sm font-semibold text-main2-color">
              {product.category}
            </p>
          </div>
        </div>
      </div>
      <div 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="mt-24">
        <div className="flex font-bold flex-row flex-wrap justify-center text-lg gap-2.5 sm:gap-5 text-gray-500">
          <p
            className={
              description
                ? 'link-underline-active w-fit'
                : 'link-underline link-underline-black w-fit'
            }
            onClick={() => dispatch({ type: 'DESCRIPTION_SUCCESS' })}
          >
            DESCRIPTION
          </p>
          <p
            className={
              specification
                ? 'link-underline-active w-fit'
                : 'link-underline link-underline-black w-fit'
            }
            onClick={() => dispatch({ type: 'SPECIFICATION_SUCCESS' })}
          >
            SPECIFICATION
          </p>
          <p
            className={
              reviews
                ? 'link-underline-active w-fit'
                : 'link-underline link-underline-black w-fit'
            }
            onClick={() => dispatch({ type: 'REVIEWS_SUCCESS' })}
          >
            REVIEWS
          </p>
        </div>
        {description ? (
          <div className="flex justify-center mt-4 px-4 sm:px-10">
            <div className="text-gray-500 text-sm">{product.deepInfo}</div>
          </div>
        ) : specification ? (
          <div className="flex justify-center mt-4 text-gray-500 px-4 sm:px-10">
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 ...">SPECIFICATIONS</th>
                  <th className="border border-gray-400 ...">PROPERTIES</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="border border-gray-400 font-bold p-2">
                    Processor
                  </td>
                  <td className="border border-gray-400 p-2">
                    {product.specifications.processor}
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="border border-gray-400 font-bold p-2">
                    Storage capacity
                  </td>
                  <td className="border border-gray-400 p-2">
                    {product.specifications.storageCapacity}
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="border border-gray-400 font-bold p-2">
                    Graphics card
                  </td>
                  <td className="border border-gray-400 p-2">
                    {product.specifications.graphicsCard}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : reviews ? (
          <div className="flex justify-center mt-4 px-4 sm:px-10">
            <div className="border border-gray-400 p-5">
              {product.reviews.map((singleReview) => (
                <div
                  key={review.name}
                  className="flex flex-col sm:flex-row gap-6 mb-4"
                >
                  <div className="text-6xl text-main2-color">
                    <BsFillPersonLinesFill />
                  </div>
                  <div className="flex flex-col gap-1.5 text-gray-500 mb-2 w-full">
                    <p className="font-bold">{singleReview.name}</p>
                    <Rating rating={singleReview.rating} />
                    <p className="text-sm">{singleReview.review}</p>
                    <hr className="border-1 border-gray-400 mt-4 w-full" />
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="font-bold">ADD A REVIEW</p>
                <form className="text-gray-500">
                  <div className="flex flex-col text-sm gap-3 py-4">
                    <label
                      className="flex flex-row gap-0.5 font-semibold"
                      htmlFor="name"
                    >
                      Your name
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
                      htmlFor="review"
                    >
                      Your review
                      <span className="medium-text">
                        <FaStarOfLife />
                      </span>
                    </label>
                    <textarea
                      required
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="border h-44 resize py-3 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                      name="review"
                      placeholder="Write a review"
                    ></textarea>
                  </div>
                  <div className="flex flex-col text-sm gap-3 py-4">
                    <label
                      className="flex flex-row gap-0.5 font-semibold"
                      htmlFor="review"
                    >
                      Rate this product
                      <span className="medium-text">
                        <FaStarOfLife />
                      </span>
                    </label>
                    <div className="flex flex-row gap-x-1 text-xl">
                      <span
                        onClick={() => {
                          dispatch({ type: 'RATING_ONE' });
                          setRating(1);
                        }}
                      >
                        <i
                          className={
                            rating1 || rating2 || rating3 || rating4 || rating5
                              ? 'fas fa-star'
                              : 'far fa-star'
                          }
                          style={{ color: 'rgb(255,54,93)' }}
                        />
                      </span>
                      <span
                        onClick={() => {
                          dispatch({ type: 'RATING_TWO' });
                          setRating(2);
                        }}
                      >
                        <i
                          className={
                            rating2 || rating3 || rating4 || rating5
                              ? 'fas fa-star'
                              : 'far fa-star'
                          }
                          style={{ color: 'rgb(255,54,93)' }}
                        />
                      </span>
                      <span
                        onClick={() => {
                          dispatch({ type: 'RATING_THREE' });
                          setRating(3);
                        }}
                      >
                        <i
                          className={
                            rating3 || rating4 || rating5
                              ? 'fas fa-star'
                              : 'far fa-star'
                          }
                          style={{ color: 'rgb(255,54,93)' }}
                        />
                      </span>
                      <span
                        onClick={() => {
                          dispatch({ type: 'RATING_FOUR' });
                          setRating(4);
                        }}
                      >
                        <i
                          className={
                            rating4 || rating5 ? 'fas fa-star' : 'far fa-star'
                          }
                          style={{ color: 'rgb(255,54,93)' }}
                        />
                      </span>
                      <span
                        onClick={() => {
                          dispatch({ type: 'RATING_FIVE' });
                          setRating(5);
                        }}
                      >
                        <i
                          className={rating5 ? 'fas fa-star' : 'far fa-star'}
                          style={{ color: 'rgb(255,54,93)' }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="py-4">
                    <button
                      onClick={submitHandler}
                      className="bg-main-color text-white text-sm font-bold px-4 rounded py-2 hover:bg-main2-color duration-500"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
