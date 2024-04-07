import { createSlice } from '@reduxjs/toolkit'
import { getAllJobs } from '../actions/jobsActions';

const initialState = {
    allJobs: [],
    savedJobs: [],
    loading: false,
    error: null
}

// function fetchData(){}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {
    },
    extraReducers : (builder) => {
        builder
        .addCase(getAllJobs.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllJobs.fulfilled, (state, action) => {
            state.loading = false;
            state.allJobs = action.payload;
        })
        .addCase(getAllJobs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default jobsSlice.reducer