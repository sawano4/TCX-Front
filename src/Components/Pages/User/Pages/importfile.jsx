import { useState } from "react"
import { useRef } from "react"

function Importfile() {
const [files, setFiles] = useState(null);
    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };
    if (files) return (
        <div className="flex flex-col align-center mx-7 border-2 h-[100%] rounded-[7px] min-w-[230px]">
            <ul>
                {Array.from(files).map((file, idx) => <li className="mx-2 bg-[#003e95] text-white rounded-lg px-4 py-2 my-2 font-[Gilroy] w-[90%] mx-auto" key={idx}>{file.name}</li>)}
            </ul>
        </div>
    )
  return (
    <>
        {!files && <div className="flex flex-col align-center justify-center mx-7 bg-[#eaf5f9] border-dashed border-2 h-[100%] rounded-[7px]"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
            <img src="../../../../public/addfile.svg" alt="Add File" className="w-[60px] h-[60px] mx-auto my-2"/>
            <p className="my-2 font-[Gilroy] text-[20px] w-[80%] mx-auto font-bold text-center">Drag and drop document</p>
            <input type="file"
                multiple
                onChange={
                    (event) => setFiles(event.target.files)
                }
            hidden
                ref={inputRef}
            />
            <button className="font-[Gilroy] w-[80%] mx-auto" onClick={() => inputRef.current.click()}>Or click here to import from computer</button>
        </div>}
    </>
  )
}

export default Importfile