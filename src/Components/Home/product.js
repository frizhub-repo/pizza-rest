import React from 'react'

function Product({price, name, desc}) {
    return(
        <div className="w-1/4 mx-4 ">
            <div className="bg-transparent text-left  border-dotted border-b-2 border-white ">

                    <h2 className="text-lg text-white font-weight-bolder title-font mb-4">{name}</h2>
                    <p className="text-white text-xs mb-4">{desc}</p>
                    <span className='text-yellow-500 w-75 text-lg font-weight-bolder'>${price}</span>

            </div>
        </div>
    )
}
export default Product
