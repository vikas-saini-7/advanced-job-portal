import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

// ################
// LOGIN
// ################
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/api/user/login`, credentials);
        const { token } = response.data; 
        localStorage.setItem('token', token); 
        return response.data.userDetails;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
    }
);

// login with token 
export const loginUserWithToken = createAsyncThunk(
  'auth/loginUserWithToken',
  async (token, { rejectWithValue }) => {
    try {
      // Perform API request to validate the token or fetch user data
      const response = await axios.post(`${BASE_URL}/api/user/validateToken`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Assuming the response contains user data
      return response.data.userDetails;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data); // Handle API errors gracefully
    }
  }
);


// ################
// SIGNUP
// ################

export const signupUser = createAsyncThunk(
  'auth/SignupUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/signup`, credentials);
      const { token } = response.data; 
      console.log(response)
      localStorage.setItem('token', token);
      return response.data.userDetails;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);