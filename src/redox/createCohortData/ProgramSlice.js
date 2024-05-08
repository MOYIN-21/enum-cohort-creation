import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  program: '', 
};

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setProgram(state, action) {
      state.program = action.payload;
    },
  },
});

export const { setProgram } = programSlice.actions;
export default programSlice.reducer;