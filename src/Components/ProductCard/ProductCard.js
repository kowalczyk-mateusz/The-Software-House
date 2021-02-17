import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../Loader'
const ProductCard = ()=>{
    const history = useHistory()

    const exitCardShadow = (e) =>{
        const element = e.target
        if(element.classList.contains('shadow')){
            history.push('/product')
            
        }
    }
    const {details, isLoading} = useSelector((state) => state.details)
    
    return(<>

        <Shadow className='shadow' onClick={exitCardShadow}>
        {isLoading ? <Loader /> :
            <Card>
                <Close className="shadow">
                <svg className="shadow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#1A1B1D"/>
                </svg>

                </Close>
                <Image>
                    <img src={details.image} alt={details.name}/>
                </Image>
                <ProductInfo>
                <ProductName>
                    {details.name}
                </ProductName>
                <ProductDescription>
                {details.description}
                </ProductDescription>
                </ProductInfo>
            </Card>
                    }
        </Shadow>

        </>
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
top: 0;
left: 0;
cursor: pointer;

`
const Card = styled.div`
position: relative;
width: 327px;
height: 570px;
background-color: #f9f9f9;
border-radius: 8px;
overflow: hidden;
cursor: auto;
@media (min-width: 1200px){
    width:600px;
    height: 530px;
}
`
const Close = styled.div`
position: absolute;
top: 25px;
right: 25px;
cursor: pointer;
z-index: 999;
`
const Image = styled.div`
width: 100%;
height: 60%;
img{
    width: 100%;
    height: 100%;
    }
    @media (min-width: 1200px){
    height: 70%;
    img{
        object-fit: cover;
    }
}
`
const ProductInfo = styled.div`
height: calc(100% - 60%);
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