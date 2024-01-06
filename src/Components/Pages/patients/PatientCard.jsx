import male from "../../../assetss/imgs/male.svg";
import female from "../../../assetss/imgs/female.svg";

const PatientCard = ({ patient }) => {
  return (
    <div className="w-[30%] h-[300px] py-2  border-black rounded-lg shadow-xl flex flex-col justify-center items-center gap-5">
      <div className="text-right w-full text-red-500 px-4">X</div>
      <div
        className={`w-[70%] h-[50%] ${
          patient.gender === "male" ? "bg-blue-300" : "bg-pink-400"
        }  rounded-full flex items-center justify-center`}
      >
        <img src={patient.gender === "male" ? male : female} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-semibold capitalize text-center">{patient.name}</h4>
        <button className="border-2 border-[#436178] px-6 py-1 rounded-md">
          see details
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
