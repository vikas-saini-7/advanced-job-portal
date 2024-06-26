import { createSlice } from '@reduxjs/toolkit';
import { loginUser, loginUserWithToken, signupUser } from '../actions/authActions';

const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logoutUser: (state) => {
        state.user = null;
        state.isLoggedIn = false;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
          })
          .addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || 'Signup failed'; // Handle potential missing error message
          })
          .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || 'Login failed'; // Handle potential missing error message
          })

          .addCase(loginUserWithToken.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(loginUserWithToken.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
          })
          .addCase(loginUserWithToken.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
