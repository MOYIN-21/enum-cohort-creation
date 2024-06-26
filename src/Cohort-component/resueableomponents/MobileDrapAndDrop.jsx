import React from 'react';
import SvgIcon from '@mui/joy/SvgIcon';

const MobileDrapAndDrop=()=> {
    return (
      <div className="flex items-center justify-center">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h- border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-blue-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
              <p className="mb-2 text-lg"><span>choose file </span></p>
              <p className="text-xs text-gray-500">240x240 px Recommended, max size 1MB</p>
          </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    );
}

export default MobileDrapAndDrop;







// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import { styled } from '@mui/joy';

// const VisuallyHiddenInput = styled('input')`
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1;
//   overflow: hidden;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   white-space: nowrap;
//   width: 1px;
// `;

// const LargeScreenDragAndDrop=()=> {
//   return (
//     <Button className='grid'
//       component="label"
//       role={undefined}
//       tabIndex={-1}
//       variant="outlined"
//       sx={{
//         height: "96px",
//         border: '2px dashed #008EEF'
//       }}
//       color="neutral"
//       startDecorator={
     
//       }
//     >
//       Drage and drop or choose file
//       <VisuallyHiddenInput type="file" />
//     </Button>
//   );
// }
// export default LargeScreenDragAndDrop;




// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import SvgIcon from '@mui/joy/SvgIcon';
// import { styled } from '@mui/joy';

// const VisuallyHiddenInput = styled('input')`
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1;
//   overflow: hidden;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   white-space: nowrap;
//   width: 1px;
// `;

// const MobileDrapAndDrop=()=> {
//   return (
//     <Button className='grid'
//       component="label"
//       role={undefined}
//       tabIndex={-1}
//       variant="outlined"
//       sx={{
//         height: "48px",
//         display: "grid",
//         border: '1px dashed #008EEF'
//       }}
//       color="neutral"
//       startDecorator={
//         <SvgIcon>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//             />
//           </svg>
//         </SvgIcon>
//       }
//     >
//       upload file
//       <VisuallyHiddenInput type="file" />
//     </Button>
//   );
// }
// export default MobileDrapAndDrop;


