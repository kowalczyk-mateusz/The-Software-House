import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
//Components
import Navigation from '../Components/Navigation/Navigation'
import ProductList from '../Components/ProductList/ProductList'
import ProductCard from '../Components/ProductCard/ProductCard'
import Empty from '../Components/Empty/Empty'
//REDUX
import {loadProducts} from '../Actions/productAction'
const MainPage = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadProducts());
    },[dispatch])
    return(
        <StyledMainPage>
                        <Navigation />
                {/* <ProductCard/> */}

            <ProductList />
            {/* <Empty /> */}
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
background-color: #F8F8FA;
width: 100%;
height: 200vh;
`
export default MainPage;