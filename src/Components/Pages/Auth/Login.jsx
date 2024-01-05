import React from 'react'
import Formlogin from './Formlogin'

function Login() {
  return (
    <>
    <img src="./Drleftlogin.png" alt="" className='absolute hidden lg:flex left-[-1rem] top-10'/>

    <img src="./Drrightlogin.png" alt="" className='absolute right-[-3rem] hidden lg:flex bottom-1' />


    

    <div className='flex flex-col-1 sm:flex-cols-2 w-full h-screen '>
     <Formlogin />

     


    </div>
    
    
    </>
  )
}

export default Login