import { createSlice } from '@reduxjs/toolkit';

const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    image: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = uploadSlice.actions;

export default uploadSlice.reducer;
