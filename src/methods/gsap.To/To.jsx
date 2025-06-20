import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

const To = () => {
  const circle = useRef()
  useEffect(()=>{
    gsap.to(circle.current,{
        x:200,
        y:20,
        duration: 2,
        delay: 0,
        ease: 'power2.out',
        yoyo: true,
    })
  })
  return (
    <div className='flex items-center justify-center h-screen'>
        <div ref={circle} className='bg-blue-700 w-52 h-52 rounded-full'></div>
    </div>
  )
}

export default To