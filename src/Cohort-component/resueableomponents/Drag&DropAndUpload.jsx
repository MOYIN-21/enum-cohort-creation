// import React, { useState, useRef } from 'react'

// const DragDropAndUpload = () => {
//   const [files, setFiles] = useState(null);
//   const inputRef = useRef();
//   console.log(files)

//   const handleDragOver = (event) =>{
//     event.preventDefault();
//     console.log(Array.from(event.dataTransfer.files))
//     setFiles(event.dataTransfer.files)
//   }

//   if (files) return (
//     <div>
//       <ul>
//         {Array.from(files).map((file, idx) => 
//         <li key={idx}>{file.name}
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
//           >
//             Upload
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <>
//     {!files &&(
//     <div 
//       onDrag={handleDragOver}
//       // onDrop={handleDrop}
//       >
//       <h1>Drag and Drop files to Upload</h1>
//       <h1>Or</h1>
//       <input className='' 
//         type='file' 
//         multiple
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