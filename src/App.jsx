import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Work from "./components/Work"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { Helmet } from "react-helmet";
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-180 bottom',
          end: 'bottom 70%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (
    <ReactLenis root>
      <Helmet>
        <title>Thevindu Dehigaspitiya | Fullstack Developer</title>
        <meta name="description" content="Fullstack Developer portfolio of Thevindu Dehigaspitiya. Projects, skills, and contact info." />
        <meta name="keywords" content="Frontend Developer, Fullstack Developer, Front-end, JavaScript, TypeScript, Portfolio, Thevindu, Sri Lanka" />
        <meta name="author" content="Thevindu Dehigaspitiya" />
      </Helmet>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        {/* <Review/> */}
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
