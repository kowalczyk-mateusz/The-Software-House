import React from 'react'
import styled from 'styled-components'
import productImage from '../../Assets/Images/shoes.png'
const ProductCard = ( )=>{
    return(
        <Shadow>
            <Card>
                <Close>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#1A1B1D"/>
                </svg>

                </Close>
                <Image>
                    <img src={productImage} alt=""/>
                </Image>
                <ProductInfo>
                <ProductName>
                    Nike running Shoes
                </ProductName>
                <ProductDescription>
                Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt
                </ProductDescription>
                </ProductInfo>
            </Card>
        </Shadow>
    )
}
const Shadow = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(26,27,29,0.9);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
z-index: 50;
`
const Card = styled.div`
position: relative;
width: 327px;
height: 570px;
background-color: #f9f9f9;
border-radius: 8px;
overflow: hidden;
@media (min-width: 1200px){
    width:600px;
    height: 530px;
}
`
const Close = styled.div`
position: absolute;
top: 25px;
right: 25px;
`
const Image = styled.div`
width: 100%;

img{
    width: 100%;
    height: 100%;
    }
    @media (min-width: 1200px){
    height: 70%;
    img{
        object-fit: contain;
    }
}
`
const ProductInfo = styled.div`
padding: 24px;
background-color: #fff;
@media (min-width: 1200px){
    padding: 0px 32px 56px 32px;
}
`
const ProductName = styled.div`
color: #1a1b1d;
font-size: 24px;
font-weight: 600;
line-height: 40px;
`
const ProductDescription = styled.div`
margin-top: 8px;
font-size: 18px;
font-weight: 600;
color: #9194a5;
line-height: 24px;
`
export default ProductCard