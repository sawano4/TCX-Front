import React from 'react'

function Card({ icon, title, text }) {
  return (
  <>
    <div className="flex flex-col hover:bg-[#0077B6] hover:text-white bg-white p-10 py-16 rounded-[16px] shadow-lg w-[30%] transition ease-in-out delay-150">
        {icon && <img src={icon} alt="Icon" className="mr-2 h-6 w-6 my-10" />}  
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <p className="mb-10 text-md">{text}</p>
    </div>
  </>
  )
}

export default Card