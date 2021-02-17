import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const Pagination = ({page, setPage}) =>{

    const {totalPages, currentPage} = useSelector((state)=> state.products)
    // useEffect(()=>{
    //     setPage(totalPages)
    // },[totalPages])
    const lastPage = () =>{
        setPage(totalPages)
    }
    const firstPage = () =>{
        setPage(1);
    }

      const firstNumber = () =>{
        if(currentPage < 2){
            setPage( 1)
            const element = document.querySelector('.firstNumber')
            element.classList.add('active')
        }
        else{
            setPage(currentPage - 1)
        }

        
      }
      const secondNumber = () =>{
        if(currentPage < 2){
            setPage(2)
        }
        else{
            setPage(currentPage)
        }
      }

      const thirdNumber = () =>{
        if(currentPage < 2){
            setPage ( 3 )
        }
        else if(currentPage == totalPages){
            setPage(totalPages)
        }
        else{
            setPage(currentPage + 1)
        }
      }
    return(
        <StyledPagination>
            <Paginate>
            <First onClick={firstPage}>
            First
            </First>
            <Numbers>
              <p className={currentPage == 1 ? 'active': ''} onClick={firstNumber}>{currentPage == 1 ? 1 : currentPage - 1}</p>
              <p className={currentPage >= 2 ? 'active': ''}onClick={secondNumber}>{currentPage < 2 ? 2 : currentPage}</p>
              <p onClick={thirdNumber}>{currentPage < 2 ? 3 : currentPage + 1}</p>
              {currentPage !== totalPages &&(
                  <>
              <p>...</p>
              <p onClick={()=> setPage(totalPages - 2)}>{totalPages-2}</p>
              <p onClick={()=> setPage(totalPages - 1)}>{totalPages-1}</p>
                <p onClick={()=> setPage(totalPages)}>{totalPages}</p>
                </>
                 )}
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
p{
    cursor: pointer;
}
.active{
    color: #4460F7;
}
`
const Last = styled.div`
color: #1A1B1D;
font-weight: 600;
font-size: 14px;
cursor: pointer;
`
export default Pagination