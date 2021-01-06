import React from 'react'
import Product from "./product";


function MenuTable({prodList}) {

    return(
        <div className="flex flex-wrap mt-4 ml-1 w-3/4">
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>
            <Product name={'Warm entree 1'} desc={'Duis pharetra luctus lacus ut \n' +
            'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut'} price={8.50}/>


        </div>
    )

}

export default MenuTable
