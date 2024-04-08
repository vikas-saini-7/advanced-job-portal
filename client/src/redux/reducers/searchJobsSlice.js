import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "../actions/searchJobsActions";

// Slice to manage search state
const searchSlice = createSlice({
    name: 'search',
    initialState: {
      results: [],
      activeJob: null,
      loading: false,
      error: null
    },
    reducers: {
        setActiveJob(state, action){
          state.activeJob = action.payload;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchJobs.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
          state.loading = false;
          state.results = action.payload;
        })
        .addCase(fetchJobs.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const { setActiveJob } = searchSlice.actions;
  export default searchSlice.reducer;