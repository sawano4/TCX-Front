import React from 'react';
import Formsignup from './Formsignup';

function Signup() {
  return (
    <>
      <img src="./Leftdoctorsignup.png" alt="" className='absolute hidden lg:flex left-[-3rem] bottom-0  h-auto' />

      <img src="./rightdoctorsignup.png" alt="" className='absolute right-[-3rem] hidden lg:flex top-1 w-1/8 h-auto' />

      <div className='flex w-full '>
        <Formsignup />
      </div>
    </>
  );
}

export default Signup;
