import React from 'react';
import female from '../../../../../src/assetss/imgs/female.svg';
import male from '../../../../../src/assetss/imgs/male.svg'
import { Link } from "react-router-dom";

function PatientCard({ patient, onDelete }) {
  const deleteItem = () => {
    onDelete(patient.id); // Update state without making a server call
    console.log('Patient deleted successfully from the UI');
  };

  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 rounded-xl w-1/4 relative p-2 shadow-xl">
      <button className="w-full text-right text-red-400" onClick={deleteItem}>
        delete
      </button>
      <div className="w-[75%] h-[150px] bg-[#0077B61A] rounded-[50%] flex items-center justify-center ">
        <img src={patient.gender === 'Male' ? male : female} alt="" />
      </div>
      <div>
        <h4 className="text-[#002845] text-xl">{patient.name}</h4>
        <Link to='/user/edit'><button className="border-2 rounded-lg border-[#436178] p-1 text-[#436178] ">
          see details
        </button></Link>
      </div>
    </div>
  );
}

export default PatientCard;