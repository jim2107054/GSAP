import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Set = () => {
  const boxref = useRef();
  const circle = useRef();
  useEffect(() => {
    gsap.set([boxref.current,circle.current], {
      x: 100,
      y: 100,
      opacity: 0.5,
      scale: 0.5,
      rotation: 45,
      backgroundColor: "red",
    });
  }, []);

  const handleClick = () => {
    gsap.to(boxref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      backgroundColor: "blue",
      position:"relative",
      duration: 3,
    });

    gsap.to(circle.current,{
        x:0,
        y:0,
        opacity:0.8,
        scale: 1.2,
        backgroundColor: "green",
        border: "2px solid black",
        height: "50px",
        width: "50px",
        position: "absolute",
        xPercent: -100,
        yPercent: -100,
        duration: 3,
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div ref={boxref} className="w-32 h-32 bg-blue-500 rounded-md" />
      <div ref={circle} className="w-28 h-28 rounded-full bg-red-700"></div>
      <button
        onClick={handleClick}
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Box
      </button>
    </div>
  );
};
export default Set;
