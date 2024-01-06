import LabeledInput from "./Labeledinput"
import LabeledInputpen from "./Labelinputpen"
import Importfileclick from "./importfileclick"


function Userprofile() {
  return (
    <div className="flex justify-center align-center w-screen">
        <div className="flex flex-col align-center justify-center w-[60%] mx-[10%]">
            <div className="flex items-center justify-center justify-between">
                <h1 className="font-[Gilroybold] text-[40px] text-[#023E8A] my-10">Username</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-12 ">
                <LabeledInputpen type="text" placeholder="First Name" label="First Name"/>
                <LabeledInputpen type="text" placeholder="Last Name" label="Last Name"/>
                <LabeledInputpen type="email" placeholder="Mail" label="Mail"/>
                <LabeledInputpen type="number" placeholder="Phone Number" label="Phone Number"/>
                <LabeledInputpen type="text" placeholder="Specialization" label="Specialization"/>
                <LabeledInputpen type="password" placeholder="Password" label="Password"/>
            </div>
            <button className='bg-[#38CFBB] text-white rounded-lg px-4 py-3 my-10 font-[Gilroy] w-[100%] mx-auto'>Save</button>
        </div>
        <div className="w-[40%] flex items-center justify-center">
            <img src="../../../public/doctormakingheart.png" alt="octor" />
        </div>
    </div>
  )
}

export default Userprofile