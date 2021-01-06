import React from'react'


function TestimonialCard({image ,text}){
    return(
        <div className="w-full lg:mb-0 mb-6 mt-6 p-4">
            <div className="h-full text-center">
                <img alt="testimonial"
                     className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-yellow-500 p-1 bg-gray-100"
                     src={image}/>
                    <p className="leading-relaxed text-xs text-white">{text}</p>

            </div>
        </div>
    )
}

export default TestimonialCard
