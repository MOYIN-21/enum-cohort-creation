import { configureStore } from "@reduxjs/toolkit";
import programReducer from './redox/createCohortData/ProgramSlice'

const store= configureStore({
    reducer: {
        program: programReducer,
    }
})
export default store
