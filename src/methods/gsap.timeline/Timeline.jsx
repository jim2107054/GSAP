import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Timeline = () => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(box1.current, { duration: 3, x: 600, ease: "power1.inOut" })
      .to(box2.current, { duration: 1, x: 400, ease: "power1.inOut" }, "-=1") //here -2 means it will start 2 seconds before the previous animation ends
      .to(box3.current, { duration: 5, x: 500, ease: "power1.inOut" }, "+=1")// here +1 means it will start 1 second after the previous animation ends
      .to(
        [box1.current, box2.current, box3.current],
        {
          x: -100,
          y: -50,
          duration: 2,
          rotation: 360,
          ease: "power1.inOut",
        },"+=2"
      ); //here -2 means it will start 2 seconds before the previous animation ends
  }, []);

  return (
    <div>
      <div className="flex gap-4 mt-20 justify-center">
        <div ref={box1} className="w-24 h-24 bg-red-500 rounded items-center justify-center text-center">box1</div>
        <div ref={box2} className="w-24 h-24 bg-green-500 rounded items-center justify-center text-center">box2</div>
        <div ref={box3} className="w-24 h-24 bg-blue-500 rounded items-center justify-center text-center">box3</div>
      </div>
    </div>
  );
};

export default Timeline;
