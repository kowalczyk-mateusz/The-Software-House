import axios from 'axios'
import {api} from '../Assets/Api/Api'

//ACTIONS 

export const loadProducts = () => async (dispatch) =>{
    const products = await axios.get(api)

    dispatch({
        type: "FETCH_PRODUCTS",
        payload: {
            products: products.data.items,
        }
    })
}