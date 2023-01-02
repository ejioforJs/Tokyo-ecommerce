import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import logger from 'use-reducer-logger';
import LoadingBox from '../components/LoadingBox';
import Pagination from '../components/Pagination';
import ShopProducts from '../components/ShopProducts';
import ReactPaginate from 'react-paginate';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'SORTAVERAGERATINGLTH':
      return {
        ...state,
        sortAverageRatingLTH: true,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case 'SORTAVERAGERATINGHTL':
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: true,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case 'SORTNEWNESSLTH':
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: true,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case 'SORTNEWNESSHTL':
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: true,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case 'SORTPRICELTH':
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: true,
        sortPriceHTL: false,
      };
    case 'SORTPRICEHTL':
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: true,
      };
      case 'ALL_SUCCESS':
      return {
        ...state,
        all: true,
        phone: false,
        phoneAccessories: false,
        laptop: false,
        laptopAccessories: false,
        television: false,
      };
    case 'PHONE_SUCCESS':
      return {
        ...state,
        all: false,
        phone: true,
        phoneAccessories: false,
        laptop: false,
        laptopAccessories: false,
        television: false,
      };
    case 'PHONE_ACCESSORIES_SUCCESS':
      return {
        ...state,
        all: false,
        phone: false,
        phoneAccessories: true,
        laptop: false,
        laptopAccessories: false,
        television: false,
      };
    case 'LAPTOP_SUCCESS':
      return {
        ...state,
        all: false,
        phone: false,
        phoneAccessories: false,
        laptop: true,
        laptopAccessories: false,
        television: false,
      };
    case 'LAPTOP_ACCESSORIES_SUCCESS':
      return {
        ...state,
        all: false,
        phone: false,
        phoneAccessories: false,
        laptop: false,
        laptopAccessories: true,
        television: false,
      };
    case 'TELEVISION_SUCCESS':
      return {
        ...state,
        all: false,
        phone: false,
        phoneAccessories: false,
        laptop: false,
        laptopAccessories: false,
        television: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state, 
        all: false,
        phone: false,
        phoneAccessories: false,
        laptop: false,
        laptopAccessories: false,
        television: false
      }
    default:
      return state;
  }
};

export default function ShopScreen({ itemsPerPage, search, setSearch }) {
  // const [currentPage, setCurrentPage] = useState(1)
  // const [productsPerPage, setProductsPerPage] = useState(5)
  // const [currentProducts, setCurrentProducts] = useState(null)
  // const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const [
    {
      loading,
      error,
      products,
      sortAverageRatingLTH,
      sortAverageRatingHTL,
      sortNewnessLTH,
      sortNewnessHTL,
      sortPriceLTH,
      sortPriceHTL,
      all,
      phone,
      phoneAccessories,
      laptop,
      laptopAccessories,
      television,
    },
    dispatch,
  ] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
    sortAverageRatingLTH: false,
    sortAverageRatingHTL: false,
    sortNewnessLTH: true,
    sortNewnessHTL: false,
    sortPriceLTH: false,
    sortPriceHTL: false,
    all: false,
    phone: false,
    phoneAccessories: false,
    laptop: false,
    laptopAccessories: false,
    television: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const results = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if(search) {
      dispatch({type:"SEARCH_SUCCESS"})
    }
  }, [search])

  const filteredProducts = products.filter((product) => {
    if (search) {
      if (
        product.category.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search)
      ) {
        return product;
      }
    }
    if(all){
      return product
    }
    if (phone) {
      if (product.category.toLowerCase().includes('phone')) {
        return product;
      }
    }
    if (phoneAccessories) {
      if (product.category.includes('PAccessories')) {
        return product;
      }
    }
    if (laptop) {
      if (product.category.toLowerCase().includes('laptop')) {
        return product;
      }
    }
    if (laptopAccessories) {
      if (product.category.includes('LAccessories')) {
        return product;
      }
    }
    if (television) {
      if (product.category.toLowerCase().includes('television')) {
        return product;
      }
    }
    if (
      !search &&
      !all &&
      !phone &&
      !phoneAccessories &&
      !laptop &&
      !laptopAccessories &&
      !television
    ) {
      return product;
    }
    else{
      return false
    }
  });

  const sortedProducts = sortNewnessLTH
    ? filteredProducts
    : sortNewnessHTL
    ? filteredProducts.reverse()
    : sortPriceLTH
    ? filteredProducts.sort(function (a, b) {
        return a.price - b.price;
      })
    : sortPriceHTL
    ? filteredProducts
        .sort(function (a, b) {
          return a.price - b.price;
        })
        .reverse()
    : sortAverageRatingLTH
    ? filteredProducts.sort(function (a, b) {
        return (
          a.reviews.reduce((a, c) => a + c.rating, 0) / a.reviews.length -
          b.reviews.reduce((a, c) => a + c.rating, 0) / b.reviews.length
        );
      })
    : sortAverageRatingHTL
    ? filteredProducts.sort(function (a, b) {
        return (
          b.reviews.reduce((a, c) => a + c.rating, 0) / b.reviews.length -
          a.reviews.reduce((a, c) => a + c.rating, 0) / a.reviews.length
        );
      })
    : null;

  const endOffset = itemOffset + itemsPerPage;
  // setCurrentProducts(products.slice(itemOffset, endOffset))
  // setPageCount(Math.ceil(products.length / itemsPerPage))
  const currentProducts = sortedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedProducts.length;
    setItemOffset(newOffset);
  };

  // const indexOfLastProduct = currentPage * productsPerPage
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // const paginate = (pageNumber) => {
  //     setCurrentPage(pageNumber)
  // }

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>shop</title>
      </Helmet>
      <div className="bg-main-color flex pt-10 pl-20 pr-20 pb-20 items-center justify-center">
        <p className="text-white text-lg sm:text-2xl font-bold">SHOP</p>
      </div>
      <div className="mt-24 px-4 sm:px-10 flex flex-col sm:flex-row gap-8">
        <div className="basis-1/4">
          <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col gap-3">
            <p className="font-bold text-lg border-2 border-b-main2-color p-2">
              CATEGORIES
            </p>
            <div className="flex flex-col gap-3 text-sm pl-2">
            <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'ALL_SUCCESS' });
                }}
                className={`${
                  all ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                All
              </p>
              <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'PHONE_SUCCESS' });
                }}
                className={`${
                  phone ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                Phones
              </p>
              <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'PHONE_ACCESSORIES_SUCCESS' });
                }}
                className={`${
                  phoneAccessories ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                Phone Accessories
              </p>
              <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'LAPTOP_SUCCESS' });
                }}
                className={`${
                  laptop ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                Laptops
              </p>
              <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'LAPTOP_ACCESSORIES_SUCCESS' });
                }}
                className={`${
                  laptopAccessories ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                Laptop Accessories
              </p>
              <p
                onClick={() => {
                  setSearch('');
                  dispatch({ type: 'TELEVISION_SUCCESS' });
                }}
                className={`${
                  television ? 'text-main2-color' : 'text-gray-500'
                } dropdown-text`}
              >
                Television
              </p>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="mb-6 flex flex-col gap-y-5 sm:flex-row w-full justify-between items-center">
            <p 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-row gap-2 items-center text-gray-500">
              <span className="bg-main2-color p-2 rounded-full text-white text-2xl">
                <AiOutlineUnorderedList />
              </span>{' '}
              <span className="text-sm">
                showing {itemOffset} - {endOffset} of {sortedProducts.length}{' '}
                results
              </span>
            </p>
            <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-sm text-gray-500 flex flex-row gap-2 items-center z-40">
              <span>Sort By:</span>
              <div className="relative">
                <div
                  onClick={() =>
                    dropdownPopoverShow
                      ? setDropdownPopoverShow(false)
                      : setDropdownPopoverShow(true)
                  }
                  className="border border-gray-400 py-2 px-3 rounded-md cursor-pointer flex flex-row items-center gap-2"
                >
                  {sortAverageRatingLTH
                    ? 'Sort by average rating: low to high'
                    : sortAverageRatingHTL
                    ? 'Sort by average rating: high to low'
                    : sortNewnessLTH
                    ? 'Sort by newness: old to new'
                    : sortNewnessHTL
                    ? 'Sort by newness: new to old'
                    : sortPriceLTH
                    ? 'Sort by price: low to high'
                    : sortPriceHTL
                    ? 'Sort by price: high to low'
                    : null}
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
                <div
                  className={`bg-white absolute overflow-hidden duration-300 rounded shadow-2xl mb-1
          ${dropdownPopoverShow ? 'opacity-100 py-5 px-6' : 'opacity-0'}`}
                >
                  <ul className="flex flex-col gap-3 text-sm">
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTAVERAGERATINGLTH' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by average rating: low to high
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTAVERAGERATINGHTL' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by average rating: high to low
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTNEWNESSLTH' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by newness: low to high
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTNEWNESSHTL' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by newness: high to low
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTPRICELTH' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by price: low to high
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: 'SORTPRICEHTL' });
                        setDropdownPopoverShow(false);
                      }}
                      className="dropdown-text"
                    >
                      Sort by price: high to low
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul>
            {currentProducts.map((product) => (
              <li 
              data-aos="fade-up"
        data-aos-duration="1500"
              className="flex flex-row justify-between items-center sm:gap-7 mb-9" key={product._id}>
                <ShopProducts product={product} />
              </li>
            ))}
          </ul>

          <ReactPaginate
            previousLabel={<GiPreviousButton />}
            nextLabel={<GiNextButton />}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={'flex flex-row gap-3 justify-center'}
            pageClassName={
              'w-7 text-center py-1 text-sm font-bold hover:bg-main2-color hover:text-white duration-500 border border-main2-color'
            }
            pageLinkClassName={''}
            previousClassName={
              'w-7 flex justify-center items-center py-1 text-sm font-bold hover:bg-main2-color hover:text-white duration-500 border border-main2-color'
            }
            previousLinkClassName={''}
            nextClassName={
              'w-7 flex justify-center items-center py-1 text-sm font-bold hover:bg-main2-color hover:text-white duration-500 border border-main2-color'
            }
            nextLinkClassName={''}
            breakClassName={
              'w-7 flex justify-center items-center py-1 text-sm font-bold hover:bg-main2-color hover:text-white duration-500 border border-main2-color'
            }
            breakLinkClassName={''}
            activeClassName={'bg-main2-color text-white'}
          />
        </div>
        {/* <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />  */}
      </div>
    </div>
  );
}
