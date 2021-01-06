import React from "react";

import hamburger from '../../images/hamburger.png'
import address from '../../images/address.png'
import delivery from '../../images/delivery.png'
import rating from '../../images/rating.png'
import clock from '../../images/clock.png'

function Section2() {
    return(
        <section className='flex py-20  w-full '>
            <div className=' w-1/6 h-full'>
                <img className='object-cover w-full' src={hamburger}/>
            </div>
            <div className='flex-grow-1 w-5/6 h-full ml-12 mt-2'>
                <div className='h-24 flex '>
                    <div className='w-1/4  '>
                        <img className='object-contain  w-full h-16 ' src={clock}/>
                        <h2 className='text-lg font-weight-bold mt-2 text-gray-800'>Opening hours</h2>
                        <p className=' text-gray-500 text-center text-sm'>Lun-Ven: 9:00-20:00</p>

                    </div>
                    <div className='w-1/4'>
                        <img className='object-contain  w-full h-16 ' src={address}/>
                        <h2 className='text-lg font-weight-bold mt-2 text-gray-800'>Address</h2>
                        <p className=' text-gray-500 text-center text-sm'>Via Mario Rossi 13</p>

                    </div>
                    <div className='w-1/4'>
                        <img className='object-contain  w-full h-16' src={rating}/>
                        <h2 className='text-lg font-weight-bold text-gray-800 mt-2'>Reviews</h2>
                        <p className=' text-gray-500 text-center text-sm'>Satisfid</p>


                    </div>
                    <div className='w-1/4   '>
                        <img className='h-16 object-contain  w-full' src={delivery}/>
                        <h2 className='text-lg d-block  w-full mt-2 text-center font-weight-bold text-gray-800'>Delivery</h2>
                        <p className=' text-gray-500 text-center text-sm'>Min order-35</p>

                    </div>
                </div>
                <div className='flex justify-content-between w-full mt-12 mr-0'>
                    <div className='flex-grow-1 w-1/3 content-center align-items-center'>
                        <h1 className='text-yellow-500  font-weight-bold mt-8 text-6xl mt-4'>Hot fresh Pizza</h1>
                        <p className='font-weight-bold text-2xl text-black'>Grab your deals with amazing discounts</p>
                    </div>
                    <div className='flex w-2/3 d-flex mr-0  mt-4 mb-0'>
                        <div className='d-inline-flex w-1/6 align-items-center p-0 -mr-16 -mt-8 z-10 '>
                            <div
                                className="flex-shrink-0 w-24  shadow-lg h-24 bg-green-500 text-white text-3xl font-weight-bold border-4 border-white  rounded-full inline-flex items-center align-self-center justify-center">
                               15% off
                            </div>
                        </div>

                        <img className='h-full w-5/6   border-4 border-white  z-0 object-cover mr-0 shadow-lg' src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'/>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Section2
