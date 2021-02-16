import axios from 'axios'
import {apiDetail} from '../Assets/Api/Api'

export const loadDetails = (id) => async (dispatch) =>{

    dispatch({
        type: "LOADING_DETAILS",
    })

    const detailsData = await axios.get(apiDetail(id))

    dispatch({
        type: "FETCH_DETAILS",
        payload:{
            details: detailsData.data,
        }
    })
}