import React from 'react'

function MenuItem({time}) {
    return(
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full"
                     src="https://dummyimage.com/1203x503"/>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{time}</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
            </div>


        </div>
    )
}

export default MenuItem
