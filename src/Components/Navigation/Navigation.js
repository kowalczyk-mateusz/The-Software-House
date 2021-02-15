import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../../Assets/Images/ProfilePicture.png'
import SearchIcon from '../../Assets/Images/Shape.png'
const Navigation = () =>{
    return(
        <Nav>
            <Logo>
                join.tsh.io
            </Logo>
            <Menu>
                <Search>
                <input type="text" placeholder="Search"/>
                <button><img src={SearchIcon} alt="SearchIcon"/></button>
                </Search>
                <CheckBoxContainer>
                <CheckBox type='checkbox' name='active'/>
                <CheckBoxLabel htmlFor='active'>Active</CheckBoxLabel>
                <CheckBox type='checkbox' name="Promo"/>
                <CheckBoxLabel htmlFor='Promo'>Promo</CheckBoxLabel>
                </CheckBoxContainer>
            </Menu>
            <Profile>
                <img src={ProfilePicture} alt=""/>
            </Profile>
        </Nav>
    )
}

const Nav = styled.nav`
width: 100%;
height: auto;
padding: 52px 24px 32px 24px;
display: grid;
grid-template-columns: 2fr 1fr;
align-items: center;
background-color: #fff;
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