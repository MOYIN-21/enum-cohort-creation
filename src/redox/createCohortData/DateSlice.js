import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  endDate: '', 
  startDate: '',
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    setStartDate(state, action){
      state.startDate = action.payload;
    }
  },
});

export const { setEndDate, setStartDate } = dateSlice.actions;
export default dateSlice.reducer;
