const initialState = {
    products: [],
    search: [],
    isLoading: true,
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products: action.payload.products,
                isLoading: false,
            }
        case "SEARCH_PRODUCTS":
            return{
                ...state,
                search: action.payload.search,
                products: [],
                isLoading: false,
            }
        case "CLEAR_PRODUCTS":
            return{
                ...state,
                search: [],
            }
        case "LOADING_PRODUCTS":
            return{
                ...state,
                isLoading: true,
            }
        default: 
            return { ...state}
    }
}

export default productReducer