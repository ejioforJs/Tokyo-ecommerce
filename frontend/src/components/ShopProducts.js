import React, { useContext } from 'react';
import Rating from './Rating';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Store } from '../Store.js';

const ShopProducts = ({ product }) => {
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

  const initialRating = product.reviews.reduce((a, c) => a + c.rating, 0);
  const averageRating = initialRating / product.reviews.length;
  const rating =
    averageRating === 0.5 || 1.5 || 2.5 || 3.5 || 4.5
      ? averageRating
      : Math.ceil(averageRating);
  return (
    <>
      <div className="sm:basis-1/4 basis-2/5 flex flex-row">
      <Link to={`/product/${product.slug}`}>
      <img className="h-28 sm:h-60 w-full" src={product.image1} alt="" />
      </Link>
      </div>
      <div className="sm:basis-3/4 basis-3/5 flex flex-col gap-1 sm:gap-3">
        <p className="font-semibold text-xl sm:text-2xl">{product.name}</p>
        <Rating rating={rating} />
        <p className="flex flex-row gap-2 sm:text-lg text-md">{`${
          '$' + product.price
        }`}</p>
        <p className="text-sm hidden sm:block text-gray-500 w-full">
          {product.deepInfo}
        </p>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => addToCartHandler()}
            className="sm:px-6 px-3 text-xs font-bold text-white bg-main-color border-none py-1 sm:py-3 transition ease-in duration-200 uppercase rounded-md hover:bg-main2-color hover:text-white"
          >
            Add to cart
          </button>
          <button
            onClick={() => addToWishlistHandler()}
            className="px-3 sm:px-6 text-black bg-about-color2 border-none py-3 transition ease-in duration-200 uppercase rounded-md hover:bg-main2-color hover:text-white"
          >
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
