import React from 'react'
import Nav from '../components/Home/nav'
import Hero from '../components/Home/Hero'
import Acheivements from '../components/Home/acheivements'
import Services from "../components/Home/services"
import IconCircles from "../components/Home/circle"
import Projects from '../components/Home/projects'
import Posts from '../components/Home/Posts'

function Home() {
  return (
   <>
   <Nav />
   <Hero />
   <Acheivements />
   <Services />
   <IconCircles />
   <Projects />
   <Posts/>
   </>
  )
}

export default Home