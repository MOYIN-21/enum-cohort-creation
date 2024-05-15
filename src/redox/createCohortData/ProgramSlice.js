import { createSlice } from '@reduxjs/toolkit';



const initialState = {

   
   cohortsData: [
    {
      id: 2,
      // picture: '/assets/C1.png', 
      cohortName: 'Cohort 1',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "backend" 
    },
    {
      id: 2,
      // picture: '/assets/C1.png', 
      cohortName: 'Cohort 2',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "backend" 
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 3',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "frontend"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 4',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product "
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 5',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Devops"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 6',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "product "
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 7',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Data "
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 8',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "ui/ux"
    },
    {
      id: 3,
      // picture: '/assets/C1.png',
      cohortName: 'Cohort 9',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Data"
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