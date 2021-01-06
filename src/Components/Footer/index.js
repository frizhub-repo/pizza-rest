import React from "react";

function Footer() {
    return(
        <footer className="text-white bg-gray-500 px-24 body-font divide-2 divide-y divide-white">
            <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                             stroke-linejoin="round" stroke-width="2"
                             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">tailblocks</span>
                    </a>
                    <p className="mt-2 text-sm text-white font-weight-bold text-left">Follow us on <i
                        className="fab fa-instagram"></i> <i className="fab fa-facebook-square"></i> </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white text-left tracking-widest text-sm mb-3">Quick links</h2>
                        <nav className="list-none mb-10 text-left">
                            <li>
                                <a className="text-white  text-left mb-3" href='/'><i className="fas fa-arrow-right white-text"></i>  Home</a>
                            </li>
                            <li>
                                <a className="text-white text-left mb-3" href='/delivery'><i className="fas fa-arrow-right white-text"></i>   Delivery</a>
                            </li>
                            <li>
                                <a className="text-white text-left mb-3" href='/tableRes'> <i className="fas fa-arrow-right white-text"></i>  Table reservation</a>
                            </li>
                            <li>
                                <a className="text-white text-left mb-3" href='/menu'> <i className="fas fa-arrow-right white-text"></i>  Menu</a>
                            </li>
                            <li>
                                <a className="text-white text-left mb-3" href='/contact'> <i className="fas fa-arrow-right white-text"></i>  Contact us</a>
                            </li>
                            <li>
                                <a className="text-white text-left mb-3" href='/#'> <i className="fas fa-arrow-right white-text"></i>  Privacy Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full ">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 tetx-left">Contact us</h2>
                        <nav className="list-none mb-10 text-left">
                            <li>
                                <a className=" text-white text-left"><i className="fas fa-map-marker-alt white-text"></i>       Via monti 12 Milan</a>
                            </li>
                            <li>
                                <a className=" text-white text-left"><i className="fas fa-phone white-text"></i>     33366677122</a>
                            </li>
                            <li>
                                <a className=" text-white text-left"><i className="far fa-envelope white-text"></i>     grandRestaurant@gmail.com</a>
                            </li>
                            <li>
                                <a className="text-white text-left"><i className="fas fa-globe white-text"></i>        grandRest.com</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-500">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1"
                           target="_blank">@knyttneve</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
