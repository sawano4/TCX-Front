import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function Importfileclick() {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    if (files) return (
        <div className="flex flex-col align-center h-[100%] min-w-[230px]">
            <ul>
                {Array.from(files).map((file, idx) => 
                    <li className="bg-[#e1f1f8] px-3 py-3 my-4 rounded-[12px] font-[Gilroy] text-[#023E8A]" key={idx}>
                        <div className='flex'>
                            <img src="../../../../public/document.svg" className='w-[20px] h-[20px] mr-5' alt="" />
                            {file.name}
                        </div>
                    </li>)}
            </ul>
        </div>
    )
  return (
    <>
        {!files && <div >
            <input type="file"
                multiple
                onChange={
                    (event) => setFiles(event.target.files)
                }
                 hidden
                ref={inputRef}
            />
            <button className="bg-teal-500 text-white rounded-lg px-4 py-2 font-[Gilroy] w-[60%] mx-auto mt-10" onClick={() => inputRef.current.click()}>Add</button>
        </div>}
    </>  
  )
}

export default Importfileclick