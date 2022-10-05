import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
  },
  wishlist: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'WISHLIST_ADD_ITEM':
      const newWishItem = action.payload;
      const existWishItem = state.wishlist.find(
        (item) => item._id === newWishItem._id
      );
      const wishItems = existWishItem
        ? state.wishlist.map((item) =>
            item._id === existWishItem._id ? newWishItem : item
          )
        : [...state.wishlist, newWishItem];
      localStorage.setItem('wishlist', JSON.stringify(wishItems));
      return { ...state, wishlist: wishItems };
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'WISH_REMOVE_ITEM': {
      const wishItems = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('wishlist', JSON.stringify(wishItems));
      return { wishlist: { ...state.wishlist, wishItems } };
    }
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
        cart: { cartItems: [], shippingAddress: {} },
        wishlist: [],
      };
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
