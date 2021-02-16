import React from 'react'
import styled from 'styled-components'

const Empty = () =>{
    return(
        <StyledEmpty>
            <EmptyCard>
                <Icon>
                <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.5 9.02197H34C35.6569 9.02197 37 10.3651 37 12.022V43.522C37 45.1788 35.6569 46.522 34 46.522H4C2.34315 46.522 1 45.1788 1 43.522V12.022C1 10.3651 2.34315 9.02197 4 9.02197H11.5C11.5 4.87984 14.8579 1.52197 19 1.52197C23.1421 1.52197 26.5 4.87984 26.5 9.02197Z" stroke="#B9BDCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  </Icon>
                  <EmptyHeadline>
                      Ooops... It's empty here
                  </EmptyHeadline>
                  <EmptyNote>
                      There are no products on the list
                  </EmptyNote>
            </EmptyCard>
        </StyledEmpty>
    )
}

const StyledEmpty = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
padding: 24px;
@media (min-width: 1200px){
    padding: 56px;
}
`
const EmptyCard = styled.div`
background-color: white;
border-radius: 8px;
min-width: 327px;
width: 600px;
height: 344px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Icon = styled.div`
`
const EmptyHeadline = styled.h2`
margin-top: 24px;
font-size: 18px;
color: #1a1b1d;
font-weight: 600;
`
const EmptyNote = styled.p`
margin-top: 8px;
font-size: 14px;
font-weight: 600;
color: #9194a5;
`
export default Empty