import axios from 'axios'
import {api, searchApi} from '../Assets/Api/Api'

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
export const searchProducts = (search, active, promo) => async (dispatch)=>{

    dispatch({
        type: "LOADING_PRODUCTS",
    })


    const searchData = await axios.get(searchApi(search, active, promo))

    dispatch({
        type: "SEARCH_PRODUCTS",
        payload:{
            search: searchData.data.items,
        }
    })


}