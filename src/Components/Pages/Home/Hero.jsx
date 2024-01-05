import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex items-started justify-between max-w-[84vw] bg-[url("/Doctor.png")] bg-no-repeat bg-center bg-contain'>
        <div className=' flex flex-col items-end gap-24 py-16'>
            <div className='flex flex-col items-end gap-8'>
                <h2 className='uppercase text-[#023E8A] text-4xl font-bold text-left'>Empower your practice</h2>
                <h2 className='uppercase text-[#023E8A] text-4xl font-bold text-left'>designed exclusively</h2>
            </div>
            <p className='text-right w-[31vw] text-[#8B8B8B] text-lg'>
            Bienvenue sur Calendly, votre passerelle numérique vers une meilleure santé. Découvrez nos services de pointe pour vous accompagner tout au long de votre parcours bien-être
            </p>
            
            <Link to="/Login">
              <button className="bg-[#0077B6] text-[20px] md:text-[24px] px-[4vw] md:px-[2.5vw] py-[1.5vh] text-white rounded-[8px]">
                Login
              </button>
            </Link>
        </div>
        <div className='relative z-[100] flex flex-col items-start gap-24 py-16'>
            <div className='flex flex-col items-start gap-8'>
                <h2 className='uppercase text-[#023E8A] text-4xl font-bold text-left'>with our innovative solutions </h2>
                <h2 className='uppercase text-[#023E8A] text-4xl font-bold text-left'>for doctors</h2>
            </div>
            <p className='text-left w-[31vw] text-[#8B8B8B] text-lg'>
            Bienvenue sur Calendly, votre passerelle numérique vers une meilleure santé. Découvrez nos services de pointe pour vous accompagner tout au long de votre parcours bien-être
            </p>
            <Link to="/Register">
              <button className="bg-transparent border-2 border-[#0077B6] text-[20px] md:text-[24px] px-[4vw] md:px-[2.5vw] py-[1.5vh] text-[#0077B6] rounded-[8px]">
                Sign up
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Hero