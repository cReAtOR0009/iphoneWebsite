import React, { useState, useEffect, useRef, Children } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {gsap} from "gsap"
import {chipImg, heroVideo, smallHeroVideo} from "../utils/"

 gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 720?smallHeroVideo:heroVideo)

  const ctaRef = useRef()



const handleVidesetSrc = ()=> {
  if (window.innerWidth < 720) {
    setVideoSrc(smallHeroVideo)
  } else {
    setVideoSrc(heroVideo)
  }
}

useEffect(() => {
  window.addEventListener("resize", handleVidesetSrc)

  return () => {
   return window.removeEventListener("resize", handleVidesetSrc)
  }
}, [])




  useGSAP(() => {
    const Children = gsap.utils.toArray(ctaRef.current.children)

    // Children.forEach(child => {
    //   gsap.to(child, {
    //     rotate:200,
    //     scrollTrigger:{
    //       trigger:child,
    //       start:"top 10%",
    //       end:"bottom 10%",
    //       scrub:true
    //     }, 
    //   })
    // })
    

    gsap.to("#heroText", {
      opacity:1, delay:1.5
    })

    gsap.to("#cta", {
      opacity:1, y:-50, delay:2
    })
  }, [])
  return (
    <section className="flex flex-col justify-normal nav-height">
      <div className="h-5/6 w-full flex-center flex-col">
      <p id={"heroText"} className="hero-title">Iphone 15</p>
        <div>
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      </div>

      <div  ref={ctaRef} id="cta" className="flex flex-col items-center opacity-0 transalate-y-20">
        <a href="#hightlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or 999</p>
      </div>
    </section>
  );
};

export default Hero;
