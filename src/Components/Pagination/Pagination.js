import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'


const Pagination = ({page, setPage, limit, setLimit}) =>{


    const lastPage = () =>{
       setPage(totalPages)
    }
    const firstPage = () =>{
        setPage(1);
    }
    console.log(page)

    const {totalPages, currentPages, currentPage} = useSelector((state)=> state.products)
    return(
        <StyledPagination>
            <Paginate>
            <First onClick={firstPage}>
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
            <Last onClick={lastPage}>
            Last
            </Last>
            </Paginate>
        </StyledPagination>
    )
}
const StyledPagination = styled.div`
width: 100%;
background-color: #F8F8FA;
`
const Paginate = styled.div`
width: 100%;
max-width: 400px;
margin: 0 auto;
padding: 0 40px;
padding-bottom: 68px;
padding-top: 20px;
display: flex;
justify-content: space-between;
`
const First = styled.div`
color: #1A1B1D;
font-weight: 600;
font-size: 14px;
cursor: pointer;
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
cursor: pointer;
`
export default Pagination