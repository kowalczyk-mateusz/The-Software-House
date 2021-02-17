import axios from 'axios'
import {api, searchApi} from '../Assets/Api/Api'

//ACTIONS 

export const loadProducts = (limit, page) => async (dispatch) =>{

    const products = await axios.get(api(limit, page))

    dispatch({
        type: "FETCH_PRODUCTS",
        payload: {
            products: products.data.items,
            totalItems: products.data.meta.totalItems,
            totalPages: products.data.meta.totalPages,
            currentPage: products.data.meta.currentPage,

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
            totalItems: searchData.data.meta.totalItems,
            totalPages: searchData.data.meta.totalPages,
            currentPage: searchData.data.meta.currentPage,
        }
    })


}