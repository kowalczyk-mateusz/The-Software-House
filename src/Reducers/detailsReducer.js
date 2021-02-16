const initialState = {
    details: [],
    isLoading: true,
}


const detailsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_DETAILS":
            return{
                ...state,
                details: action.payload.details,
                isLoading: false,
            }
        case "LOADING_DETAILS":
            return{
                ...state,
                isLoading: true,
            }

        default:
            return{...state}
    }
}

export default detailsReducer