const initialState = {
    products: [],
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products: action.payload.products,
            }
        default: 
            return { ...state}
    }
}

export default productReducer