import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Menu from "./menu";
import food from'../../images/foodMain.png'
import TestimonialCard from "./testimonialCard";
import Carousel from "react-multi-carousel";

import { Image } from "semantic-ui-react";
import Footer from "../Footer";
import OpeningHours from "./openingHours";
import About from "./About";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

function Home() {



    return(
        <div>
            <Navbar/>
            <Hero/>
            <Section2/>
            <Menu/>
            <div className='bg-white   flex justify-content-center'>
                <div className='w-1/2 py-12 ml-12 '>
                    <h1 className='text-left mb-2 text-yellow-500 text-6xl font-weight-bold'>Our Story</h1>
                    <p className='text-left text-sm w-2/3'>Duis pharetra luctus lacus ut
                        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                        Integer eu nibh at nisi ullamcorper sagittis id vel leo.</p>
                </div>
                <div className='w-1/2 mb-0'>
                    <img className={'object-cover mb-0'} src={food}/>

                </div>
            </div>
            <div className='flex  bg-menu-3'>
                <div className='w-1/2 h-full bg-hero-pattern'>
                    <div className='w-full h-full   p-24 bg-white '>
                        <div className='w-3/5 p-0'>
                            <h1 className='text-4xl text-left text-black p-0  '>The starters cafe</h1>
                            <p className='text-right '>Chinese/Thai</p>
                        </div>

                        <h2 className='text-lg text-left font-weight-bold mt-4'>Fast food pizza and burgers</h2>
                        <p className='text-sm text-left'>Duis pharetra luctus lacus ut
                            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                            Integer eu nibh at nisi ullamcorper sagittis id vel leo.</p>

                    </div>
                </div>

                <div className='w-1/2 bg-black-food'>


                        <About/>
                </div>


            </div>

            <OpeningHours/>

            <section className='text-gray-700 body-font bg-white  text-center mb-2	z-index-0  py-24 w-full mb-0'>

                <Carousel
                    ssr
                    partialVisbile
                    itemClass="image-item"
                    responsive={responsive}
                >
                    {images.slice(0, 5).map(image => {
                        return (
                            <img
                                draggable={false}
                                style={{ width: "100%", height: "100%",marginLeft:'4px' }}
                                src={image}
                            />
                        );
                    })}
                </Carousel>

            </section>

            <Footer/>


        </div>

    )
}

export default Home
