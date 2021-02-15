import React from 'react'
import styled from 'styled-components'
//Components
import Navigation from '../Components/Navigation/Navigation'
import ProductList from '../Components/ProductList/ProductList'
import ProductCard from '../Components/ProductCard/ProductCard'

const MainPage = () =>{
    return(
        <StyledMainPage>
                <ProductCard/>
            <Navigation />
            <ProductList />
        </StyledMainPage>
    )
}

const StyledMainPage = styled.div`
background-color: #F8F8FA;
width: 100%;
height: 200vh;
`
export default MainPage;