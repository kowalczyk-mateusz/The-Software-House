import {combineReducers} from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    products: productReducer,
    search: searchReducer,
})

export default rootReducer