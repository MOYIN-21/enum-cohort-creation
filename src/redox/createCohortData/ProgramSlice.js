import { createSlice } from '@reduxjs/toolkit';
import  C1 from '../../assets/C1.png'

const initialState = {

   
   cohortsData: [
    {
      id: 2,
      picture: {C1}, 
      cohortName: 'Cohort 1',
      learners: '37 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer" 
    },
    {
      id: 2,
      cohortName: 'Cohort 2',
      learners: '52 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer" 
    },
    {
      id: 3,
      cohortName: 'Cohort 3',
      learners: '43 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      cohortName: 'Cohort 4',
      learners: '18 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      cohortName: 'Cohort 5',
      learners: '30 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer"
    },
    {
      id: 3,
      cohortName: 'Cohort 6',
      learners: '36 Learners',
      dateCreated: '2nd Jan 2021',
      program: "Product Designer "
    },
    {
      id: 3,
      cohortName: 'Cohort 7',
      learners: '44 Learners',
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

      const formatDateString = (date) => {
        if (!(date instanceof Date)) {
          console.error('Invalid date format:', date);
          return null;
        }

        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        const getDayWithSuffix = (day) => {
          if (day > 3 && day < 21) return day + 'th';
          switch (day % 10) {
            case 1: return day + 'st';
            case 2: return day + 'nd';
            case 3: return day + 'rd';
            default: return day + 'th';
          }
        };

        return `${getDayWithSuffix(day)} ${month} ${year}`;
      };

      const payload = {
        ...rest,
        dateCreated: formatDateString(startDate),
        endDate: formatDateString(endDate)
      };
      console.log(payload , 'hgahgfagfgdfgdf');
      state.cohortsData.push(payload)
    },
  },
});

export const { setProgram } = programSlice.actions;
export default programSlice.reducer;