import React from 'react'


function Card({title, text, image, icon}) {
    return(
        <div className=" w-full p-1" >
            <div className="flex     sm:flex-row flex-col w-full h-full" style={{background:`url(${image}) center center`}}>

                <div className="flex-grow bg-opacity-50 bg-black rounded-lg w-full h-full p-4">
                    <div className='inline-flex justify-content-center  content-center mb-4  w-full hover:cursor-pointer' >
                        <img className='h-12 w-12 mr-2 d-block  ' src={icon}/>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-center text-white">{title}</h2>
                    <p className="leading-relaxed text-base text-white text-center px-8">{text}</p>

                </div>
            </div>
        </div>
    )

}
export default Card
