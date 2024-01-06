import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className="flex items-center justify-between p-4 shadow-lg mb-4 w-[100%]">
            <img src="../../../public/Logo.png" alt="Doc Organizer" className='mx-12' /> 
            <div className='flex items-center justify-between mx-12 gap-5'>
                <img src="../../../public/nonotification.svg" alt="No Notification" />
                {/* <img src="../../../public/notification.svg" alt="Notification" /> */}
                <Link to='/user/profile'><img src="../../../public/profile-circle.svg" alt="Profile Picture"/></Link>
            </div>  
        </div>
    </>
  )
}

export default Navbar