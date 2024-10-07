import she from '../../../../assetss/imgs/she.svg'
import PatientCard from "../patients/PatientCard.jsx"
import History from './HistoryItem';
import MyCalendar from './calendar';
import { Link } from 'react-router-dom';
function HomeUser() {
  const patients = [
    { name: "patient01", gender: "male" },
    { name: "patient02", gender: "female" },
    { name: "patient03", gender: "male" },
    { name: "patient04", gender: "female" },
  ];
  return (
    <section className="w-screen py-10 flex gap-20 justify-center ">
      <div className="w-1/2  h-full  flex flex-col items-center justify-around">
        <div className="w-full h-[200px] bg-white drop-shadow-lg flex justify-between items-center px-6 py-2 rounded-lg">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-[#38CFBB] text-2xl font-semibold">welcome</h2>
            <h1 className="text-[#023E8A] font-black text-4xl">Souha Linda</h1>
            <h4 className="text-[#023E8A]">(Cardiology)</h4>
          </div>
          <div>
            <img src={she} alt="" />
          </div>
        </div>
        <div className="w-full h-[200px] my-5 bg-white drop-shadow-lg flex flex-col justify-center px-6 py-2 rounded-lg gap-4">
          <h4>Reports</h4>
          <div className="flex items-center gap-x-4">
            <div className="w-[25%] h-[120px] rounded-lg px-2   bg-gray-300 flex flex-col justify-around align-center">
              <div className="flex items-center gap-2">
                <h4 className="text-[#023E8A] ">Total Patients</h4>
              </div>
              <div className="flex items-center justify-center  h-[60%]">
                <h5 className="text-5xl text-[#38CFBB] font-bold">435</h5>
              </div>
            </div>
            <div className="w-[25%] h-[120px] rounded-lg px-2   bg-gray-300 flex flex-col justify-around">
              <div className="flex items-center gap-2">
                <h4 className="text-[#023E8A]">Consultation</h4>
              </div>
              <div className="flex items-center justify-center  h-[60%]">
                <h5 className="text-5xl text-[#38CFBB] font-bold">200</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-white drop-shadow-lg flex flex-col justify-between items-center  py-2 rounded-lg">
          <div className="flex items-center justify-between w-full px-10">
            <input
              className="border-[1px] border-[#0077B6] px-4 py-1 rounded-lg drop-shadow-lg"
              type="search"
              placeholder="search"
            />
            <Link to='/user/add'><button className="bg-[#023E8A] text-white px-6 py-1 rounded-md drop-shadow-md">
              Ajouter un patient
            </button></Link>
          </div>
          <div className="flex items-center gap-4 justify-start py-5  w-full flex-wrap">
            {patients.map((patient, index) => (
              <PatientCard key={index} patient={patient} />
            ))}
          </div>
        </div>
      </div>
       <div className='flex flex-col w-1/4 items-center'>
      <div className="w-5/6 border-red-400 rounded-[11px]"> <MyCalendar /></div>
      <div className='mt-20 flex flex-col justify-center'>
        <h2 className='text-center fff text-2xl text-blue-600 mb-10'> Recent History </h2>
        <ul>
          <li className='w-full rounded-lg p-3 text-white items-center border-2 bg-gray-500'> <History /></li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default HomeUser;