import { createSlice } from "@reduxjs/toolkit";
  
const cohortSlice = createSlice({
    name: 'cohort',
    initialState: {
        cohortName: "moyinoluwa",
        description: "school fees",
        selectedOption: "",
        ErrorMessage: 'please fill up the above details',
    },
    reducers: {
        setCohortName:(state, action)=>{
            state.cohortName = action.payload;
        },

        // setStartDate: (state) =>{
        //     state.startDate = new Date();
        // },

        // setEndDate: (state) =>{
        //     state.endDate = new Date();
        // },

        setDescription: (state, action) => {
            state.description = action.payload;
        },

        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        },
    }
})

export const {setCohortName, setDescription, setSelectedOption} = cohortSlice.actions;
export default cohortSlice.reducer