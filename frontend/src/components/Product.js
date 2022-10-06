import React, { useContext } from 'react';
import Rating from './Rating';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { axios } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    wishlist,
  } = state;

  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${item._id}`);
    if (product.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    // toast.success('product has been successfully added to cart')
  };

  const addToWishlistHandler = async () => {
    const existItem = wishlist.find((x) => x._id === product._id);
    if (existItem) {
      toast.error('This product is already in your wishlist');
      return;
    }
    ctxDispatch({
      type: 'WISHLIST_ADD_ITEM',
      payload: product,
    });
  };

  const initialRating = product.reviews.reduce((a,c) => a + c.rating,0)
    const averageRating = initialRating / product.reviews.length
    const rating = averageRating === 0.5 || 1.5 || 2.5 || 3.5 || 4.5 ? averageRating : Math.ceil(averageRating)

  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="1500"
    className="relative group">
      {product.countInStock === 0 ? (
        <div className="bg-main-color text-sm duration-500 font-semibold text-center text-white w-28 p-0.5 absolute top-16 left-3">
        out of stock
      </div>)
      : (
        <div className="bg-main2-color text-sm duration-500 font-semibold text-center text-white w-12 p-0.5 absolute top-16 left-3">
        sale
      </div>
      )
      }
      <div className="prod-title text-center">
        <p className="text-xl uppercase text-gray-900 font-bold">
          {product.name}
        </p>
        <p className="uppercase text-sm text-gray-500">{product.description}</p>
      </div>
      <Link to={`/product/${product.slug}`}>
        <div className="prod-img overflow-hidden">
          <img
            src={product.image1}
            className="w-full object-cover object-center group-hover:scale-110 duration-500"
            alt=""
          />
        </div>
      </Link>
      <div className="prod-info grid gap-10 mt-4">
        <div>
          <ul className="flex flex-row justify-between">
            <li className="mr-4 last:mr-0">
              <Rating rating={rating} />
            </li>
            <li className="flex gap-x-6 mr-4 last:mr-0 text-2xl">
              <span
                onClick={() => addToWishlistHandler()}
                className="nav-hover"
              >
                <AiOutlineHeart />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl">{`$${product.price}`}</p>
          <button
            onClick={() => addToCartHandler()}
            className="px-6 text-white bg-main-color border-none py-2 transition ease-in duration-200 uppercase rounded-md hover:bg-main2-color hover:text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
