import React, { useState } from 'react'
import styled from 'styled-components'
import ProfilePicture from '../../Assets/Images/ProfilePicture.png'
import SearchIcon from '../../Assets/Images/Shape.png'
import {useDispatch} from 'react-redux'
import {loadProducts} from '../../Actions/productAction'
import {searchProducts} from '../../Actions/productAction'
const Navigation = () =>{
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('');
    const inputHandler = (e)=>{
            setTextInput(e.target.value)
    }

    const [promo, setPromo] = useState(false)
    const [active, setActive] = useState(false)

    const activeHandler = () =>{
        setActive(!active)
    }
    const promoHandler = () =>{
        setPromo(!promo)
    }

    const submitChange = (e) =>{
        e.preventDefault()
        if(textInput.length === 0){
            return null;
        }
        else{

            dispatch(searchProducts(textInput, promo, active))

            setTextInput('')
        }

    }

    const clearSearch = () =>{
        dispatch({type: 'CLEAR_PRODUCTS'});
        dispatch(loadProducts());
    }


    return(
        <Nav>
            <NavContainer>
            <Logo onClick={clearSearch}>
                join.tsh.io
            </Logo>
            <Menu>
                <Search>
                <input placeholder="Search" onChange={inputHandler} type="text" value={textInput}/>
                <button onClick={submitChange}><img src={SearchIcon} alt="SearchIcon"/></button>
                </Search>
                <CheckBoxContainer>
                <CheckBox type='checkbox' onClick={activeHandler} name='active'/>
                <CheckBoxLabel htmlFor='active'>Active</CheckBoxLabel>
                <CheckBox type='checkbox' onClick={promoHandler} name="Promo"/>
                <CheckBoxLabel htmlFor='Promo'>Promo</CheckBoxLabel>
                </CheckBoxContainer>
            </Menu>
            <Profile>
                <img src={ProfilePicture} alt=""/>
            </Profile>
            </NavContainer>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    background-color: #fff;
`
const NavContainer = styled.div`
    max-width: 1600px;
    height: auto;
    padding: 52px 24px 32px 24px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 855px){
        grid-template-columns: 250px 1fr 50px;
        padding: 48px 108px;
    }
`
const Logo = styled.div`
font-size: 24px;
font-weight: 600;
color: #1a1b1d;
margin-bottom: 24px;
@media (min-width: 855px){
    margin-bottom: 0;
}
`

const Menu = styled.div`
grid-column-start: 1;
grid-column-end: 3;
display: flex;
flex-wrap: wrap;
@media (min-width: 855px){
    grid-column-start: 2;
    grid-column-end: 3;
    flex-wrap: nowrap;
}
`

const Search = styled.div`
width: 100%;
min-width: 150px;
position: relative;
max-width: 392px;
input{
    
    width: 100%;
    padding: 16px;
    border: 1px solid #e0e2ea;
    border-radius: 8px;

    ::placeholder{
        font-size: 14px;
        font-weight: 600;
        color: #1a1b1d;
    }
}
button{
    background-color: transparent;
    border: none;
    position: absolute;
    right: 16px;
    top: 16px;
}
`

const Profile = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
overflow: hidden;
order: 2;
display: flex;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
justify-self: end;
margin-bottom: 24px;
@media (min-width: 855px){
    grid-column-start: 3;
    margin-bottom: 0;
}
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
const CheckBoxContainer = styled.div`
display: flex;
align-items: center;
margin-top: 24px;
@media (min-width: 652px){
    margin-top: 0px;
    margin-left: 24px;
}
`
const CheckBox = styled.input`
width: 24px;
height: 24px;
border: 1px solid #e0e2ea;
border-radius: 4px;
`
const CheckBoxLabel = styled.label`
font-size: 14px;
color: #1a1b1d;
font-weight: 600;
margin-left: 8px;
margin-right: 32px;
`
export default Navigation