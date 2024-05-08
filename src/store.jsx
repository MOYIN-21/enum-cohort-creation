import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './redox/createCohortData/Input'
import programReducer from './redox/createCohortData/ProgramSlice'
import dateReducer from './redox/createCohortData/DateSlice'

const store= configureStore({
    reducer: {
        input: inputReducer,
        program: programReducer,
        date: dateReducer,
    }
})
export default store
