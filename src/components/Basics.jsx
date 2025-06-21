import React from 'react'
import From from '../methods/gsap.from/From';
import FromTo from '../methods/gsap.fromTo/FromTo';
import To from '../methods/gsap.To/To';
import Set from '../methods/gsap.set/Set';
import Timeline from '../methods/gsap.timeline/Timeline';
import ScrollAnimatedSection from '../methods/scrollTrigger/ScrollAnimatedSection';
import ScrollCards from '../methods/scrollTrigger/ScrollCards';

const Basics = () => {
  return (
    <div className="">
      <div className="h-[100vh] bg-green-500 flex items-center justify-center text-3xl font-bold">
        Welcome to Edemy!
      </div>

      {/* <ScrollAnimatedSection /> */}
      <ScrollCards/>

      <div className="h-[100vh] bg-red-700 flex items-center justify-center text-xl">
        Scroll down aro explore kor!
      </div>
    </div>
  )
}

export default Basics