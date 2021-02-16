import React from 'react'
import styled, {keyframes} from 'styled-components'

const Loader = () =>{
    return(
        <StyledLoader>
            <div className="load">

                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </StyledLoader>
    )
}


const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const StyledLoader = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
.load {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  svg{
    animation: ${loadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
}
.load div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #E0E2EA;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color:#4460F7 transparent transparent transparent;
}
.load div:nth-child(1) {
  animation-delay: -0.45s;
}
.load div:nth-child(2) {
  animation-delay: -0.3s;
}
.load div:nth-child(3) {
  animation-delay: -0.15s;
}

`


export default Loader