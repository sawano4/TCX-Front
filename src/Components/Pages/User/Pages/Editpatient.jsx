import LabeledInput from "./Labeledinput"
import CustomInput from "./Labeledinputpen"
import  Importfileclick from "./importfileclick"

function Editpatient() {
  return (
    <div className="flex justify-center align-center w-screen">
        <div className="flex flex-col align-center justify-center w-[60%] mx-[10%]">
            <div className="flex items-center justify-center justify-between">
                <h1 className="font-[Gilroybold] text-[40px] text-[#023E8A]">Patient Name</h1>
                <button className='bg-teal-500 text-white rounded-lg px-4 py-2 my-10 font-[Gilroy] w-[30%] text-[15px]'>Add Appointment</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-7 mb-7">
                <CustomInput type="text" label="First Name" placeholder="first name"/>
                <CustomInput type="text" label="Last Name" placeholder="last name"/>
                <CustomInput type="number" label="Age" placeholder="age"/>
                <div className="flex align-center justify-center">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] font-bold">Gender:</label>
                    <div class="inline-flex items-center">
                        <span class="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] mx-3" >Male</span>
                        <input type="radio" class="form-radio" name="gender" value="male" />
                    </div>
                    <div class="inline-flex items-center ml-6">
                        <span class="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] mx-3">Female</span>
                        <input type="radio" class="form-radio" name="gender" value="female" />         
                    </div>
                </div>
                <CustomInput type="number" label="Phone number" placeholder="phone number"/>
                <CustomInput typpe="text" label="Adress" placeholder="your adress"/>
            </div>
            <LabeledInput type="text" label="Description" placeholder="Description" className="w-[100px] bg-red-500"/> 
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-theblue font-[Gilroy] ">Description</label>
            <input type="text" name="description" placeholder="Description" className="h-[80px] mt-1 p-2 border border-gray-300 rounded-md w-full font-[Gilroy] mb-1" />
            <button className='bg-[#BBC1C1] text-white rounded-lg px-4 py-3 my-10 font-[Gilroy] w-[100%] mx-auto'>Save</button>
        </div>
        <div className="w-[40%] mr-[10%]">
            <h1 className="font-[Gilroybold] text-[#023E8A] text-[25px] mt-10">Documents</h1>
            <Importfileclick />
        </div>
    </div>
  )
}

export default Editpatient