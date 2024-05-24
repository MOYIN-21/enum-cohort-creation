import { createSlice } from '@reduxjs/toolkit';
import  C1 from '../../assets/C1.png'



const initialState = {

   
   cohortsData: [
    {
      id: 2,
      picture: {C1}, 
      cohortName: 'Cohort 1',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer" 
    },
    {
      id: 2,
      // picture: '/assets/C1.png', 
      cohortName: 'Cohort 2',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer" 
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 3',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 4',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 5',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 6',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer "
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 7',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer "
    },
   ]
};

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setProgram(state, action) {
      const { startDate, endDate, ...rest } = action.payload;
      const payload = {
        ...rest,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0]
      };
      // min={new Date().toISOString().split("T")[0]}
      //             max={new Date().toISOString().split("T")[1]}

      state.program = payload;
    },
  },
});

export const { setProgram } = programSlice.actions;
export default programSlice.reducer;