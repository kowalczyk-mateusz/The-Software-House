const initailState = {
    search: [],
}

const searchReducer = (state = initailState, action) =>{
    switch(action.type){
        case "SEARCH_PRODUCTS":
            return{
                ...state,
                search: action.payload.search
            }
        default: 
            return{
                ...state
            }
    }
}

export default searchReducer