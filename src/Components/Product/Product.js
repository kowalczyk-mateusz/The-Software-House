import React from 'react'
import styled from 'styled-components'
import Star from '../Star'
import EmptyStar from '../EmptyStar'
import {Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {loadDetails} from '../../Actions/detailsAction'
const Product = ({id, name, description, image, rating, promo, active})=>{

    const dispatch = useDispatch()

    const ratingStars = () =>{
        const stars = []
        for(let i = 1; i<=5;i++){
            if(i <= rating){
                stars.push(<Star key={i}/>)
            }
            else{
                stars.push(<EmptyStar key={i}/>)
            }
        }
        return stars;
    }

    const loadDetailHandler = ()=>{
            dispatch(loadDetails(id))
        }

    return(
        <StyledProduct onClick={loadDetailHandler}>
           
            <Image><img src={image} alt="" className={active ? 'active' : 'inactive'}/>
                {promo && <StyledPromo>Promo</StyledPromo>}
            </Image>
            <ProductInfo>
            <ProductName>
            {name}
            </ProductName>
            <ProductDescription>
            {description}
            </ProductDescription>
            <ProductRating>
               {ratingStars()}
            </ProductRating>
            <Link to={`/product/${id}`}>
    <DetailsButton className={active ? 'active' : 'inactive'}>{active ? 'Show details' : 'Unavailable'}</DetailsButton>
            </Link>
            </ProductInfo>
        </StyledProduct>
    )
}

const StyledProduct = styled.div`
min-height: 400px;
width: 327px;
display: flex;
flex-direction: column;
overflow: hidden;
border-radius: 8px;
background-color: #fff;
`
const Image = styled.div`
height: 170px;
position: relative;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.active{
    display: block;
}
.inactive{
    opacity: 0.5;
    filter: grayscale(100%);
}
`
const ProductInfo = styled.div`
padding: 0px 16px 24px 16px;
height: calc(100% - 170px);
display: flex;
flex-direction: column;
justify-content: space-between;
`
const ProductName = styled.div`
margin-top: 16px;
font-size: 18px;
font-weight: 600;
justify-self: flex-start;
`

const StyledPromo = styled.div`
width: 75px;
height: 24px;
background-color: #F9A52B;
color: #fff;
position: absolute;
top: 15px;
left: 0;
font-size: 14px;
text-align: center;
line-height: 24px;
font-weight: 600;
`
const ProductDescription = styled.div`
font-size: 14px;
font-weight: 600;
color: #9194a5;
`

const ProductRating = styled.div`
margin-top: 33px;
`
const DetailsButton = styled.div`
margin-top: 18px;
border-radius: 4px;
padding: 11px 0px;
text-align: center;
font-size: 14px;
font-weight: 600;
color: #fff;
&.active{
    background-color: #4460F7;
}
&.inactive{
    background-color: #9194A5;
}
`

export default Product