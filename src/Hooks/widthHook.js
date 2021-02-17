import {useEffect} from 'react'

const WidthHook = (setMobile, pixels, setLimit) => {

    return(
        useEffect(()=>{
            if(window.innerWidth < pixels){
                setMobile(true);
                setLimit(4)
            }
            function handleResize(){
                if(window.innerWidth < pixels){
                    setMobile(true);
                    setLimit(4)
                }
                else{
                    setMobile(false)
                    setLimit(12)
                }
            }
            window.addEventListener('resize', handleResize)
        })
    )

}

export default WidthHook