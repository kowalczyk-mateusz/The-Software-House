import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'


const Pagination = () =>{

    const {totalPages, currentPages, currentPage} = useSelector((state)=> state.products)
    console.log(totalPages)
    return(
        <StyledPagination>
            <First>
            First
            </First>
            <Numbers>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </Numbers>
            <Last>
            Last
            </Last>
        </StyledPagination>
    )
}
const StyledPagination = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0 40px;
`

const First = styled.div`
color: #1A1B1D;
font-weight: 600;
font-size: 14px;
`
const Numbers = styled.div`
color: #1A1B1D;
font-weight: 600;
font-size: 14px;
display: flex;
width: 100%;
justify-content: space-between;
padding: 0px 32px;
`
const Last = styled.div`
color: #1A1B1D;
font-weight: 600;
font-size: 14px;
`
export default Pagination