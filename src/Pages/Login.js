import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
//image
import LoginImage from '../Assets/Images/LoginImage.png'
const Login = () =>{
    return(
        <StyledLogin>
            <StyledImage>
                <img src={LoginImage} alt=""/>
            </StyledImage>
            <LoginContainer>
            <StyledLogo>
            join.tsh.io
            </StyledLogo>
                <StyledForm>
                    <FormLabel>
                        Login
                    </FormLabel>
                    <StyledLabel htmlFor="username">Username</StyledLabel>
                    <StyledInput type="text" placeholder='Enter username'/>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput type="password" autoComplete='false' placeholder='Enter Password'/>
                    <StyledLink to="/product"><LoginButton type="submit">Log in</LoginButton></StyledLink>
                    <ForgotPassword><a href="#">Forgot password?</a></ForgotPassword>
                </StyledForm>
            </LoginContainer>
        </StyledLogin>
    )
}
const StyledLogin = styled.div`
width: 100%;
height: 100vh;
padding: 40px 24px;
display: flex;
flex-direction: column;
@media (min-width: 1200px){
    flex-direction: row;
    padding: 0;
}
`

const StyledLogo = styled.div`
font-size: 24px;
color: #1A1B1D;
font-weight: 600;
`

const LoginContainer = styled.div`
width: 100%;
height: auto;
flex: 1;
margin: 0 auto;
@media (min-width: 1200px){
    padding: 52px 100px;
}
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
height: 100%;
justify-content: center;
`

const FormLabel = styled.p`
margin-top: 29px;
font-size: 30px;
font-weight: 600;
`
const StyledLabel = styled.label`
margin-top: 22px;
font-size: 14px;
font-weight: 600;
`
const StyledInput = styled.input`
max-width: 496px;
margin-top: 8px;
padding: 16px;
font-size: 14px;
color: #9194a5;
border-radius: 8px;
border: 1px solid #E0E2EA;
font-weight: 600;
::placeholder{
    font-weight: 600;
    font-size: 14px;
    color: #9194a5;
}
`
const StyledLink = styled(Link)`
margin-top: 56px;
cursor: pointer;
`
const LoginButton = styled.button`
max-width: 496px;
width: 100%;
height: 100%;
background-color: #4460F7;
border: none;
border-radius: 4px;
padding: 12px 0px;
text-align: center;
font-size: 16px;
font-weight: 600;
color: #fff;
`
const ForgotPassword = styled.span`
margin-top: 1rem;
a{
    font-weight: 600;
    font-size: 14px;
    color: #9194a5;
    text-decoration: underline;
}
`
const StyledImage = styled.div`
display: none;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media (min-width: 1200px){
    display: block;
}
`
export default Login