import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jobs: [],
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
    // extraReducers : (builder) => {
    //     builder
    //     .addCase(fetchData.pending, (state) => {
    //         state.loading = true;
    //         state.error = null;
    //     })
    //     .addCase(fetchData.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.data = action.payload;
    //     })
    //     .addCase(fetchData.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.error.message;
    //     })
    // }
})

export default jobsSlice.reducer