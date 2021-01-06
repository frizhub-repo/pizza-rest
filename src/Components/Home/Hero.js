import React from "react";

function Hero() {
    return(
        <section className="text-gray-700 body-font  inner-shadow" style={{background:`url(https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center`}}>
            <div className=" mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center w-2/3 ">
                        <h1 className="title-font text-center   text-6xl mb-4 font-weight-bold text-white">We take pride <br/> in our food</h1>
                        <p className="mb-8 leading-relaxed text-white px-18">Meggings kinfolk echo park stumptown DIY, kale chips beard
                            jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon
                            mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
                            celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-yellow-500 bg-opacity-50 bg-yellow-500  border-2 border-yellow-500 py-2 px-6 focus:outline-none   text-lg"><a href={'/menu/1'} className={'text-yellow-500'}>Our menu</a>
                            </button>

                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Hero
