import { createSlice } from "@reduxjs/toolkit";
import { searchJobs } from "../actions/searchJobsActions";

// Slice to manage search state
const searchSlice = createSlice({
    name: 'search',
    initialState: {
      results: [],
      loading: false,
      error: null
    },
    reducers: {
      // Add reducers for other actions if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(searchJobs.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(searchJobs.fulfilled, (state, action) => {
          state.loading = false;
          state.results = action.payload;
        })
        .addCase(searchJobs.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  // export const { /* Add action creators if needed */ } = searchSlice.actions;
  export default searchSlice.reducer;