// import React, { useState } from 'react'

// const DragDropAndUpload = () => {
//   const [files, setFiles] = useState(null);
//   const inputRef = useRef();
//   const handleDragOver = (event) =>{
//     event.preventDefault();
//   }

//   const handleDrop =(event)=>{
//     event.preventDefault();
//     console.log(Array.from(event.dataTransfer.files))
//     setFiles(event.dataTransfer.files)
//   }

//   const handleUpload = ()=>{};

//   if (files) return (
//     <div className='upload'>
//       <ul>
//         {Array.from(files).map((file, idx) => 
//         <li key={idx}>(file.name)
//         </li>)}
//       </ul>
//       <div className=''>
//         <button 
//           onClick={()=> 
//           setFiles(null)}
//         >
//           Cancel
//         </button>

//         <button 
//           onClick={handleUpload}>
//             Upload
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <>
//     {!files &&(
//     <div 
//       className='flex flex-col center items-center h-96 border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-blue-50 dropZone' 
//       onDrag={handleDragOver}
//       onDrop={handleDrop}
//       >
//       <h1>Drag and Drop files to Upload</h1>
//       <h1>Or</h1>
//       <input className='' 
//         type='file' 
//         // multiple
//         onChange={(event) => 
//         setFiles(event.target.files)}
//         hidden
//         ref={inputRef}
//       >
//       </input>
//       <button 
//         className='text-2xl' 
//         onClick={()=> 
//         inputRef.current.click()}
//         >
//           Select Files
//       </button>
//     </div>)
      
//     }
        
//     </>
//   )
// }

// export default DragDropAndUpload