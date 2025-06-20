import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FromTo = () => {
    const inner = useRef()
    const outer = useRef()

    useEffect(()=>{
        gsap.fromTo(outer.current,{x:-100,y:50,opacity:0},{x:0,y:0,opacity:1,duration:3})
        gsap.fromTo(inner.current,{x:-100,y:50,opacity:0},{x:0,y:0,opacity:1,duration:3})
    })
  return (
    <div ref={outer} className='flex items-center justify-center bg-green-500 p-10 m-24'>
        <div className='bg-red-700 w-16 h-16 rounded-full' ref={inner}></div>
    </div>
  )
}

export default FromTo