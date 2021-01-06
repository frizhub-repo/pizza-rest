export const setTotal=(price)=>{

    return({
            type:'TOTAL',
            payload:price
        }
    )
}

export const addItem=(item)=>{
    return(
        {type:'ADD_ITEM',
        payload:item
        }
    )
}
export const removeItem=(key)=>{
    return(
        {type:'REMOVE_ITEM',
            payload:key
        }
    )
}

