import React from 'react'
import Footer from '../../Shared/Footer'
import FAQ from './FAQ'
import Navbar from './Navbar'
import Hero from './Hero'
import Why from './Why'

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col w-full px-[8vw] gap-[25vh] mt-[160px]'>
        <Hero />
        <Why />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default Home