import React, { useState } from 'react';

const DragAndUploadFile =({setFileUpload, formData}) => {
  const [imageURL, setImageURL] = useState(null);

  // const handleChange = (event) => {
    
  // };

  const handleDragOver = (event) => {
    event.preventDefault();
    setImageURL(event.target.value)
  };
  // console.log(setImageURL)

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setImageURL(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    setImageURL(null);
  };

  return (
    <div className='bg-blue-50 border-2 border-blue-400 border-dashed rounded-lg w-full h-32 relative '
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      name='uploadImage'
      value={imageURL}
      onChange={(event)=> {handleDrop(event)
      setFileUpload}}
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