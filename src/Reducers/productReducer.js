const initialState = {
    products: [],
    search: [],
    totalItems: 0,
    totalPages: 0,
     currentPages: 0,
    isLoading: true,
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products: action.payload.products,
                totalItems: action.payload.totalItems,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
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