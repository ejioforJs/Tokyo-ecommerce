import React from 'react'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav>
      <ul className='flex flex-row justify-center gap-3'>
        {pageNumbers.map(number => (
            <li key={number}>
                <span onClick={() => paginate(number)} className='cursor-pointer border-2 text-sm font-bold hover:bg-main2-color hover:text-white duration-500 border-y-main2-color p-2'>
                    {number}
                </span>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
