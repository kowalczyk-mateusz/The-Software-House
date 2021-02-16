import React, {useEffect} from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'
import {useDispatch, useSelector} from 'react-redux'
import {loadProducts} from '../../Actions/productAction'
import ProductCard from '../ProductCard/ProductCard'
import {useLocation} from 'react-router-dom'
const ProductList = ( ) =>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadProducts());
    },[dispatch])

    const {products} = useSelector((state) => state.products)
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    return(
        <StyledProductList>
            {pathId && <ProductCard />}
            {
                products.map(product =>
                <Product
                     id={product.id}
                     key={product.id} 
                     name={product.name} 
                     image={product.image} 
                     description={product.description} 
                     rating={product.rating}
                     active={product.active}
                     promo={product.promo}
                     />
                      )
            }
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