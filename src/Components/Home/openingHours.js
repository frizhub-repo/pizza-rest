import React from 'react'

function OpeningHours() {
    return(
        <section className="text-gray-700 body-font mt-8">
            <div className="px-24 py-18 flex justify-content-center ">
                <div className="w-1/2 bg-white flex align-items-center text-center justify-content-center ">

                    <div className='w-2/3'>
                        <div>

                            <h1 className='text-2xl text-yellow-500 font-weight-bold p-2 mb-0 border border-gray-300'>Title</h1>

                        </div>
                        <div>
                        <div className='flex w-full justify-content-between p-2 mb-0 border-l border-b border-r border-gray-300'>
                            <p className='text-left flex-grow text-lg font-weight-bold text-green-500'>Monday</p>
                            <p className='text-right'>09:00-20:00</p>


                        </div>
                            <div className='flex w-full justify-content-between p-2 mb-0 border-l border-b border-r border-gray-300'>
                                <p className='text-left flex-grow text-lg font-weight-bold text-green-500'>Tuesday</p>
                                <p className='text-right'>09:00-20:00</p>


                            </div>
                            <div className='flex w-full justify-content-between p-2 mb-0 border-l border-b border-r border-gray-300'>
                                <p className='text-left flex-grow text-lg font-weight-bold text-green-500'>Wednesday</p>
                                <p className='text-right'>09:00-20:00</p>


                            </div>
                            <div className='flex w-full justify-content-between p-2 mb-0 border-l border-b border-r border-gray-300'>
                                <p className='text-left flex-grow text-lg font-weight-bold text-green-500'>Thursday</p>
                                <p className='text-right'>09:00-20:00</p>


                            </div>
                            <div className='flex w-full justify-content-between p-2 mb-0 border-l border-b border-r border-gray-300'>
                                <p className='text-left flex-grow text-lg font-weight-bold text-green-500'>Friday</p>
                                <p className='text-right'>09:00-20:00</p>


                            </div>


                        </div>
                    </div>

                </div>
                <div className="w-1/2     justify-content-center ">
                    <iframe width="100%" height="100%" className=" w-2/3 h-full ml-8 " frameBorder="0" title="map"
                            marginHeight="0" marginWidth="0" scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            ></iframe>

                </div>

            </div>
        </section>
    )
}

export default OpeningHours
