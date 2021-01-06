
const initialState={
    total:0,
    items:[],
    minimum:0,
    delivery:0
}

export default function (state=initialState,action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return{
                ...state,
                items: state.items.concat(action.payload)
            }

        case 'TOTAL':
            return{
                ...state,
            total:state.total+action.payload
        }
        default:return state

    }
}
