import {combineReducers} from 'redux'
import productReducer from './productReducer'
import detailsReducer from './detailsReducer'
const rootReducer = combineReducers({
    products: productReducer,
    details: detailsReducer,
})

export default rootReducer