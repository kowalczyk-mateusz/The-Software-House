import React from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'
const ProductList = ( ) =>{
    return(
        <StyledProductList>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </StyledProductList>
    )
}
const StyledProductList = styled.div`
background-color: #F8F8FA;
padding: 24px;
display: grid;
grid-template-columns: repeat(auto-fill, 330px);
justify-content: center;
width: 100%;
gap: 24px;
`
export default ProductList