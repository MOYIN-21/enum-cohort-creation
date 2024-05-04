import { configureStore } from "@reduxjs/toolkit";
import cohortReducer from './redux/cohortCreation/Slice'
import imageReducer from './redux/cohortCreation/imageSlice'

const store = configureStore({
    reducer:{
        cohort: cohortReducer,
        image: imageReducer
    }
})

export default store;