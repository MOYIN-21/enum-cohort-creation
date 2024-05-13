import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cohortsData: []
};

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setProgram(state, action) {
      state.program = action.payload;
      console.log(action.payload,"this is the payload")
    },
  },
});

export const { setProgram } = programSlice.actions;
export default programSlice.reducer;