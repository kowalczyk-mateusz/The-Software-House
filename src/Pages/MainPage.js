import React, {useEffect, useState} from 'react'
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
    const {search, products, isLoading, totalPages,} = useSelector((state)=> state.products)
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        dispatch(loadProducts(limit, page));
    },[page, limit])
    return(
        <StyledMainPage>
        <Navigation />
        {isLoading === true ? <Loader /> : <>{search.length || products.length > 0 ? <ProductList /> : <Empty/> }</>}
        <Pagination limit={limit} setLimit={setLimit} page={page} setPage={setPage}/>
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
background-color: #F8F8FA;
width: 100%;
height: auto;
`
export default MainPage;