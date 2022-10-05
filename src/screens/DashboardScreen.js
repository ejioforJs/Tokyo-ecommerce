import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { FaStarOfLife } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store.js';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DASHBOARD_SUCCESS':
      return {
        ...state,
        dashboard: true,
        orders: false,
        favorites: false,
        shipping: false,
        account: false,
        logout: false,
      };
    case 'ORDERS_SUCCESS':
      return {
        ...state,
        dashboard: false,
        orders: true,
        favorites: false,
        shipping: false,
        account: false,
        logout: false,
      };
    case 'FAVORITES_SUCCESS':
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: true,
        shipping: false,
        account: false,
        logout: false,
      };
    case 'SHIPPING_SUCCESS':
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        shipping: true,
        account: false,
        logout: false,
      };
    case 'ACCOUNT_SUCCESS':
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        shipping: false,
        account: true,
        logout: false,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        shipping: false,
        account: false,
        logout: true,
      };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems, shippingAddress},
    wishlist,
    userInfo,
  } = state;

  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [paymentMethodName, setPaymentMethod] = useState(shippingAddress.paymentMethodName || 'PayPal')

  const options = useMemo(() => countryList().getData(), []);

  const [
    { dashboard, orders, favorites, shipping, account, logout },
    dispatch,
  ] = useReducer(reducer, {
    dashboard: true,
    orders: false,
    favorites: false,
    shipping: false,
    account: false,
    logout: false,
  });

  useEffect(() => {
    if (!userInfo) {
      navigate('/userscreen');
    }
    console.log(userInfo);
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const signOutHandler = () => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    // localStorage.removeItem('shippingAddress')
    navigate('/userscreen');
  };

  const shippingSubmitHandler = (e) => {
    e.preventDefault()
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        address, 
        country,
        city,
        postalcode,
        paymentMethodName
      }
    })
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        address,
        country,
        city,
        postalcode,
        paymentMethodName
      })
    );
    console.log(JSON.parse(localStorage.getItem("shippingAddress")))
  };

  return (
    <div>
      {userInfo ? (
        <div>
          <Helmet>
            <title>{/* {userInfo.name}  */}</title>
          </Helmet>
          <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
            <p className="text-white text-lg sm:text-2xl font-bold">
              Hello {userInfo.name}
            </p>
          </div>
          <div className="mt-24 flex flex-col sm:flex-row gap-6 px-2 sm:px-10">
            <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="basis-1/4 flex flex-col gap-3">
              <div
                onClick={() => dispatch({ type: 'DASHBOARD_SUCCESS' })}
                className={`${
                  dashboard ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                DASHBOARD
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1500"
                onClick={() => dispatch({ type: 'ORDERS_SUCCESS' })}
                className={`${
                  orders ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                ORDERS
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1500"
                onClick={() => dispatch({ type: 'FAVORITES_SUCCESS' })}
                className={`${
                  favorites ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                FAVORITES
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1500"
                onClick={() => dispatch({ type: 'SHIPPING_SUCCESS' })}
                className={`${
                  shipping ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                CHECKOUT
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1500"
                onClick={() => dispatch({ type: 'ACCOUNT_SUCCESS' })}
                className={`${
                  account ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                ACCOUNT DETAILS
              </div>
              <div
              data-aos="fade-up"
              data-aos-duration="1500"
                onClick={signOutHandler}
                className={`${
                  logout ? 'bg-main2-color' : 'bg-main-color'
                } text-white py-2.5 text-sm pl-4 rounded font-bold hover:bg-main2-color duration-500 cursor-pointer`}
              >
                LOGOUT
              </div>
            </div>
            <div className="basis-3/4">
              {dashboard ? (
                <div
                data-aos="fade-up"
        data-aos-duration="1500"
                >
                  <h1 className="font-bold text-2xl">Dashboard</h1>
                  <p className="text-sm text-gray-500 mt-2">
                    From your account dashboard. you can easily check & view
                    your{' '}
                    <span className="text-main2-color cursor-pointer">
                      recent orders
                    </span>
                    , manage your{' '}
                    <span className="text-main2-color cursor-pointer">
                      shipping and billing addresses
                    </span>{' '}
                    and{' '}
                    <span className="text-main2-color cursor-pointer">
                      Edit your password and account details
                    </span>
                    .
                  </p>
                </div>
              ) : orders ? (
                <div
                data-aos="fade-up"
        data-aos-duration="1500"
                >
                  {cartItems ? (
                    <div>
                    <table className="border-collapse w-full">
                      <thead className="bg-about-color">
                        <tr>
                          <th className="border-y-main2-color py-2.5 ...">
                            Order
                          </th>
                          <th className="border-y-main2-color border-gray-300 ...">
                            Product
                          </th>
                          <th className="border-y-main2-color border-gray-300 ...">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, index) => (
                          <tr className="text-sm">
                            <td className="border border-gray-300 text-center p-2">
                              {index + 1}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              {product.name}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              ${product.price} For {product.quantity}{' '}
                              {product.quantity === 1 ? 'item' : 'items'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="py-4">
                    <button
                      onClick={() => dispatch({type: 'SHIPPING_SUCCESS'})}
                      className="bg-main-color float-right text-white text-sm font-bold px-4 rounded py-2 hover:bg-main2-color duration-500"
                    >
                      CHECKOUT
                    </button>
                  </div>
                  </div>
                  ) : (
                    <div>There are currently no orders</div>
                  )}
                </div>
              ) : favorites ? (
                <div>
                  {wishlist ? (
                    <table className="border-collapse w-full">
                      <thead className="bg-about-color">
                        <tr>
                          <th className="border-y-main2-color py-2.5 ...">
                            Order
                          </th>
                          <th className="border-y-main2-color border-gray-300 ...">
                            Product
                          </th>
                          <th className="border-y-main2-color border-gray-300 ...">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlist.map((product, index) => (
                          <tr className="text-sm">
                            <td className="border border-gray-300 text-center p-2">
                              {index + 1}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              {product.name}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              ${product.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div>
                      There are currently no products in your favourites
                    </div>
                  )}
                </div>
              ) : shipping ? (
                <div
                data-aos="fade-up"
        data-aos-duration="1500"
                >
                  <h1 className="font-bold text-2xl">Shipping Address</h1>
                  <form
                    className="text-gray-500"
                    onSubmit={shippingSubmitHandler}
                  >
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="address"
                      >
                        Address
                        <span className="medium-text">
                          <FaStarOfLife />
                        </span>
                      </label>
                      <input
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="address"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="country"
                      >
                        Country
                        <span className="medium-text">
                          <FaStarOfLife />
                        </span>
                      </label>
                      <Select
                        required
                        value={country}
                        onChange={(country) => setCountry(country)}
                        options={options}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="address"
                      />
                    </div>
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="city"
                      >
                       City
                        <span className="medium-text">
                          <FaStarOfLife />
                        </span>
                      </label>
                      <input
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="city"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="postalcode"
                      >
                        Postal Code
                        <span className="medium-text">
                          <FaStarOfLife />
                        </span>
                      </label>
                      <input
                        required
                        value={postalcode}
                        onChange={(e) => setPostalcode(e.target.value)}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="postalcode"
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="Paypal"
                      >
                        PayPal
                      </label>
                      <input
                        value="PayPal"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        checked={paymentMethodName === "PayPal"}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="PayPal"
                        type="radio"
                        id="PayPal"
                      />
                    </div>
                    <div className="flex flex-col text-sm gap-3 py-4">
                      <label
                        className="flex flex-row gap-0.5 font-semibold"
                        htmlFor="Stripe"
                      >
                        Stripe
                      </label>
                      <input
                        value="Stripe"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        checked={paymentMethodName === "Stripe"}
                        className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
                        name="Stripe"
                        type="radio"
                        id="Stripe"
                      />
                    </div>
                    <div className="py-4">
                      <button
                        type="submit"
                        className="bg-main-color text-white text-sm font-bold px-4 rounded py-2 hover:bg-main2-color duration-500"
                      >
                        PLACE ORDER
                      </button>
                    </div>
                  </form>
                </div>
              ) : account ? (
                <div
                data-aos="fade-up"
        data-aos-duration="1500"
                >
                  <table className="border-collapse w-full">
                    <thead className="bg-about-color">
                      <tr>
                        <th className="border-y-main2-color py-2.5 ...">
                          Full Name
                        </th>
                        <th className="border-y-main2-color border-gray-300 ...">
                          Email Address
                        </th>
                        <th className="border-y-main2-color border-gray-300 ...">
                          Username
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-sm">
                        <td className="border border-gray-300 text-center p-2">
                          {userInfo.name}
                        </td>
                        <td className="border text-center border-gray-300 p-2">
                          {userInfo.email}
                        </td>
                        <td className="border text-center border-gray-300 p-2">
                          {userInfo.username}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : logout ? (
                <div>logout</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
