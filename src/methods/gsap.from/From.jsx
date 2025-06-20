import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const From = () => {
  const jim = useRef();


  useEffect(()=>{
    gsap.from(jim.current,{
        duration: 1,
        x: 100,
        y: 100,
        opacity: 100,
        ease: "bounce.out"
    })
  })
  return (
    <div>
      <h1 ref={jim}>Hello I'm Jim</h1>
    </div>
  );
};

export default From;
