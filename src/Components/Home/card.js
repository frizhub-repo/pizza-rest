import React from "react";

function Card({promo,price,desc}) {
    return(
        <div className='p-4  ml-4 border border-gray-900 font-weight-normal shadow-sm'>
            <h1 className='text-left  text-gray-600 text-lg font-weight-normal'>{promo}</h1>
            <p className=' text-left text-sm  text-gray-600 mb-4 font-weight-normal'>${price}</p>
            <p className=' text-left text-sm  text-gray-600 mb-2 font-weight-normal'>{desc}</p>
            <p className=' text-left text-sm font-weight-bold text-yellow-500 mb-2'>See the details of the menu</p>
            <button className='py-2 px-2 w-full  bg-yellow-500 text-yellow-500 border-2 border-yellow-500 bg-opacity-50 text-lg font-weight-bold'>See menu</button>



        </div>
    )
}

export default Card
