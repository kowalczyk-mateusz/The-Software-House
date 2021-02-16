import React, {useEffect} from 'react'
import styled from 'styled-components'
//Components
import Navigation from '../Components/Navigation/Navigation'
import ProductList from '../Components/ProductList/ProductList'
import Empty from '../Components/Empty/Empty'
//REDUX
import {loadProducts} from '../Actions/productAction'
import {useDispatch , useSelector} from 'react-redux'
import Loader from '../Components/Loader'
import Pagination from '../Components/Pagination/Pagination'
const MainPage = () =>{

    const dispatch = useDispatch()
    const {search, products, isLoading} = useSelector((state)=> state.products)

    useEffect(()=>{
        dispatch(loadProducts());
    },[dispatch])
    return(
        <StyledMainPage>
        <Navigation />
        {isLoading === true ? <Loader /> : <>{search.length || products.length > 0 ? <ProductList /> : <Empty/> }</>}
        <Pagination />
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
background-color: #F8F8FA;
width: 100%;
height: 200vh;
`
export default MainPage;