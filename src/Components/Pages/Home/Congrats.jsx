import React from 'react'

function Congrats() {
  return (
    <>
        <div className='flex flex-col'>
            <div className='flex flex-col align-center justify-center mt-20 w-[100%]'>
                <img src="../../../../public/Tick.svg" alt="Congratulations" className="w-[125px] h-[125px] mx-auto"/>
                <h1 className='font-[Gilroybold] my-10 text-[30px] text-[#38CFBB] mx-auto'>Congratulations</h1>
                <p className='text-[20px] w-[50%] mx-auto text-center font-[Gilroy] text-[#38CFBB]'>Congratulations! Your account is set up and ready to roll. Welcome aboard,
                Happy exploring!</p>
            </div>
            <button className='bg-teal-500 text-white rounded-lg px-4 py-3 my-5 font-[Gilroy] w-[30%] mx-auto'>To Your Account</button>
        </div>
    </>
  )
}

export default Congrats