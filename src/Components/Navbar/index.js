import React from "react";
import logo from '../../images/logo.png'

function Navbar() {
    return(
        <header className="text-gray-700 body-font ">
            <div className=" flex w-full  justify-content-between px-44 py-4  ">
                <div className='w-25'>
                    <img src={logo} className='object-cover'/>
                </div>
                <div className='flex-grow-1 d-flex justify-content-end'>
                    <button className='  bg-yellow-500 text-yellow-500 bg-opacity-50 border-2 border-yellow-500	 py-1 px-3   text-xs font-weight-bold'>Login/Signup</button>

                </div>
            </div>
            <div className=" flex w-full bg-green-500 flex-wrap py-3 px-3 flex-col md:flex-row items-center">

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href={'/'} className="mr-5 font-weight-bolder text-white hover:text-gray-900">Home</a>
                    <a href='/menu/1' className="mr-5 font-weight-bolder text-white hover:text-gray-900">Menu</a>
                    <a href={'/tableRes'} className="mr-5 font-weight-bolder text-white hover:text-gray-900">Table reservation</a>
                    <a href={'/delivery'} className="mr-5 font-weight-bolder text-white hover:text-gray-900">Delivery</a>
                    <a href={'/contact'} className="mr-5 font-weight-bolder text-white hover:text-gray-900">Contact</a>

                </nav>
            </div>
        </header>
    )
}

export default Navbar
