import React from 'react'

function Navbar() {
  return (
    <>
        <div className="flex items-center justify-between p-4 shadow-lg mb-4 w-[100%]">
            <img src="../../../public/Logo.png" alt="Doc Organizer" className='mx-12' />
            <div className='flex items-center justify-between mx-12 gap-5'>
                <img src="../../../public/nonotification.svg" alt="No Notification" />
                {/* <img src="../../../public/notification.svg" alt="Notification" /> */}
                <img src="../../../public/profile-circle.svg" alt="Profile Picture" />
            </div>  
        </div>
    </>
  )
}

export default Navbar