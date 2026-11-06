import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-[#F6FAF9]'>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}
