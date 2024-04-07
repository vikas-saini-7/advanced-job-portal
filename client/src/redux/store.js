import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
    reducer : {
        jobs: jobsReducer,
        auth: authReducer
    },
})