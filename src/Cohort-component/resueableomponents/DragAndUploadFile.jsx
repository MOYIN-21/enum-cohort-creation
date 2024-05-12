import React, { useState } from 'react';

const DragAndUploadFile =()=> {
  const [imageURL, setImageURL] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    console.log(file, "this is a file")
    const imageURL = URL.createObjectURL(file);
    console.log(imageURL, "this is imageurl")
    setImageURL(imageURL);
  };

  const handleCancel = () => {
    setImageURL(null);
  };

  return (
    <div className='bg-blue-50 border-2 border-blue-400 border-dashed rounded-lg w-full h-32 relative '
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {imageURL && (
        <>
          <img src={imageURL} alt="Dropped" style={{ maxWidth: 'full', maxHeight: '100%', justifyContent: "center"}} />
          <button onClick={handleCancel} style={{ position: 'absolute', top: '10px', right: '10px' }}>Cancel</button>
        </>
      )}
      {!imageURL && <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Drag & drop an image here</p>}
    </div>
  );
}

export default DragAndUploadFile;





// import React, { useState, useRef} from 'react';
// import upload from "../../assets/upload.png"

// const DragAndUploadFile = () => {
//   const [files, setFiles] = useState(null);
//   const inputRef = useRef();
//   console.log(files)

//   const dropHandler = (ev) => {
//     console.log(Array.from(ev.dataTransfer.files))
//     ev.preventDefault();

//     if (ev.dataTransfer.items) {
//       [...ev.dataTransfer.items].forEach((item, i) => {
//         if (item.kind === "file") {
//           const file = item.getAsFile();
//         }
//       });
//     } else {
//       [...ev.dataTransfer.files].forEach((file, i) => {
//       });
//     }
//   };

//   const handleDragOver = (event) =>{
//     event.preventDefault();
//     console.log(event.dataTransfer.files)
//     console.log(Array.from(event.dataTransfer.files))
//     setFiles(event.dataTransfer.files)
//   }

//   const dragOverHandler = (ev) => {
//     ev.preventDefault();
//   };

 

//   if (files) return (
//     <div className='flex flex-col h-32 items-center justify-center w-full bg-blue-50 border-2 border-blue-400 border-dashed rounded-lg hover:bg-blue-300'>
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
//           Cancel Upload
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <div className='flex flex-col h-32 items-center justify-center w-full bg-blue-50 border-2 border-blue-400 border-dashed rounded-lg'>
//         <img src={files} alt="" />
//       <div className='flex gap-1 items-center justify-center'> 
//       <div
//           id="drop_zone"
//           onDrop={(event)=>dropHandler(event)}
//           onDragOver={(ev) => 
//             dragOverHandler(ev)}
//       >
//           <h1>Drag and drop or</h1>
//       </div>
//           {!files &&(
//       <div 
//         onDrag={handleDragOver}
//         >
//         <input className='' 
//           type='file' 
//           multiple
//           onChange={(event) => 
//           setFiles(event.target.files)}
//           hidden
//           ref={inputRef}
//         >
//         </input>

//         <button  
//           onClick={()=> 
//           inputRef.current.click()}
//           >
//             <p> <span className='text-blue-500 text-lg cursor-pointer'>choose files</span></p>
//         </button>
//       </div>)
//       }  
//       </div> 
//        <div>
//       <p className="text-xs text-gray-500 dark:text-gray-400">240x240 px Recommended, max size 1MB</p>
//     </div>
//     </div>  
//   );
// };
// export default DragAndUploadFile