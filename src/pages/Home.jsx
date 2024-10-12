import React from 'react'
import Nav from '../components/Home/nav'
import Hero from '../components/Home/Hero'
import Acheivements from '../components/Home/acheivements'
import Services from "../components/Home/services"
import IconCircles from "../components/Home/circle"


function Home() {
  return (
   <>
   <Nav />
   <Hero />
   <Acheivements />
   <Services />
   <IconCircles />
   </>
  )
}

export default Home