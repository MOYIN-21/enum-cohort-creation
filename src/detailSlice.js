import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const mySlice = createSlice({
    name: "fetchDetails",
    initialState,
    reducers:{
        details: (state, action)=> {
            return {
                ...state,
                value: action.payload 
              };
        },
        // data:(state) => {

        // }
    }
})

export const {details} = mySlice.actions;
export const selectValue = (state) => state.fetchDetails.value; 
export default mySlice.reducer;