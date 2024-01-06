import React from 'react'
import LabeledInput from './Labeledinput'
import Importfile from './importfile'

function Addpatient() {
  return (
    <>
      <div className='flex flex-col justify-center w-[100%] items-center text-theblue'>
        <h1 className="my-10 text-[30px] font-[Gilroybold]">Add a patient</h1>
        <div className='flex justify-center '>
            <div className="grid grid-cols-2 grid-rows-3 gap-7">
                <LabeledInput type="text" label="First Name" placeholder="first name"/>
                <LabeledInput type="text" label="Last Name" placeholder="last name"/>
                <LabeledInput type="number" label="Age" placeholder="age"/>
                <div className="flex align-center justify-center">
                    <label htmlFor="gender" className="block text-sm font-md text-gray-700 text-theblue font-[Gilroy] font-bold">Gender:</label>
                    <div class="inline-flex items-center">
                        <span class="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] mx-3" >Male</span>
                        <input type="radio" class="form-radio" name="gender" value="male" />
                    </div>
                    <div class="inline-flex items-center ml-6">
                        <span class="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] mx-3">Female</span>
                        <input type="radio" class="form-radio" name="gender" value="female" />         
                    </div>
                </div>
                <LabeledInput type="number" label="Phone number" placeholder="phone number"/>
                <LabeledInput type="text" label="Adress" placeholder="your adress"/>
            </div>
            <div>  
                <Importfile/>
            </div>
        </div>
        <button className='bg-teal-500 text-white rounded-lg px-4 py-2 my-10 font-[Gilroy] w-[60%] mx-auto'>Save</button>
      </div>
    </>
  )
}

export default Addpatient