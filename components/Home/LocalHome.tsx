import React from 'react'
import Hero from './Hero/Hero'
import { About } from './About/About'
import Service from './services/Service'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'

function LocalHome() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  )
}

export default LocalHome