import React, {useEffect} from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import {useLocation} from 'react-router-dom'

const ProductList = ( ) =>{

    const {products, search} = useSelector((state) => state.products)
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]



    return(
        <StyledProductList>
            {pathId && <ProductCard/>}
            {search.length > 0 ? <> {search.map(search =><Product
                     id={search.id}
                     key={search.id} 
                     name={search.name} 
                     image={search.image} 
                     description={search.description} 
                     rating={search.rating}
                     active={search.active}
                     promo={search.promo}
                     />)}
            </> : <> {products.map(product =>
                <Product
                     id={product.id}
                     key={product.id} 
                     name={product.name} 
                     image={product.image} 
                     description={product.description} 
                     rating={product.rating}
                     active={product.active}
                     promo={product.promo}
                     />)}
            </>}
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
max-width: 1440px;
margin: 0 auto;
gap: 24px;
`
export default ProductList