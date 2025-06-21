import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimatedSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
        // ScrollTrigger settings
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 99%",
          end: "bottom 1%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[100vh] mx-auto my-20 p-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl shadow-2xl text-white text-center text-2xl font-bold"
    >
      Ami scroll korle animate hoye uthi!
    </div>
  );
};

export default ScrollAnimatedSection;
