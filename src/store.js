import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./detailSlice";

const store = configureStore({
    reducer:{
        data: detailSlice,
    }
})

export default store;