import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Basics = () => {
    const boxRef = useRef();

    useEffect(()=>{
        const w = window.innerWidth*0.8;
        const movX = window.innerWidth*0.2;
        gsap.to(boxRef.current,{
            x:movX,
            duration: 2,
            delay: 1,
            ease: 'power1.inOut',
            backgroundColor: 'red',
            width:w,
        })
    })
  return (
    <div>
        <div ref={boxRef} className='w-10 bg-blue-500 h-screen'></div>
    </div>
  )
}

export default Basics