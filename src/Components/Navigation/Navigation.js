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
                <input type="text"/>
                <button><img src={SearchIcon} alt="SearchIcon"/></button>
                </Search>
                <input type='checkbox' name='active'/>
                <label htmlFor='active'>Active</label>
                <input type='checkbox' name="Promo"/>
                <label htmlFor='Promo'>Promo</label>

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
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Logo = styled.div`
order: 1;
flex-basis: 75%;
font-size: 24px;
font-weight: 600;
color: #1a1b1d;
`

const Menu = styled.div`
order: 3;
`

const Search = styled.div`
width: 100%;
input{
    width: 100%;
}

`

const Profile = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
overflow: hidden;
order: 2;
display: flex;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

export default Navigation