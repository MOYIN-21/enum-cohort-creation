import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cohortName: '',
    cohortDescription: '',
    // DetailErrorMessage: 'please fill up your credentials'
  };
  
  const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
      setCohortName(state, action) {
        state.cohortName = action.payload;
      },
      setCohortDescription(state, action) {
        state.cohortDescription = action.payload;
      },
    },
  });
  
  export const { setCohortName, setCohortDescription } = inputSlice.actions;
  export default inputSlice.reducer;


//         startDate:new Date(),
//         endState:new Date(),


