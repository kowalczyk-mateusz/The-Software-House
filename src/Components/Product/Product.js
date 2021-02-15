import React from 'react'
import styled from 'styled-components'
import productImage from '../../Assets/Images/Bitmap.png'
import Star from '../Star'
const Product = ()=>{
    return(
        <StyledProduct>
            <Image><img src={productImage} alt=""/></Image>
            <ProductInfo>
            <ProductName>
            Nike Running Shoes
            </ProductName>
            <ProductDescription>
            Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt
            </ProductDescription>
            <ProductRating>
               <Star />
               <Star />
               <Star />
               <Star />
               <Star />
            </ProductRating>
            <DetailsButton>Show details</DetailsButton>
            </ProductInfo>
        </StyledProduct>
    )
}

const StyledProduct = styled.div`
height: 400px;
width: 327px;
display: flex;
flex-direction: column;

border-radius: 8px;
background-color: #fff;
`
const Image = styled.div`
img{
    display: block;
    width: 100%;
}
`
const ProductInfo = styled.div`
padding: 0px 16px 24px 16px;
`
const ProductName = styled.div`
margin-top: 16px;
font-size: 18px;
font-weight: 600;
`

const ProductDescription = styled.div`
margin-top: 8px;
font-size: 14px;
font-weight: 600;
color: #9194a5;
`

const ProductRating = styled.div`
margin-top: 33px;
`
const DetailsButton = styled.div`
margin-top: 18px;
background-color: #4460F7;
border-radius: 4px;
padding: 11px 0px;
text-align: center;
font-size: 14px;
font-weight: 600;
color: #fff;
`

export default Product