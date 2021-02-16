import axios from 'axios'
import {searchApi} from '../Assets/Api/Api'

//ACTIONS

export const searchProducts = (search) => async (dispatch)=>{

    const searchData = await axios.get(searchApi(search))

    dispatch({
        type: "SEARCH_PRODUCTS",
        payload:{
            search: searchData.data.items,
        }
    })


}