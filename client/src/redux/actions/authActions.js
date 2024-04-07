import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/api/login`, credentials);
        const { token } = response.data; 
        localStorage.setItem('token', token); 
        return response.data;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
    }
);


export const loginUserWithToken = createAsyncThunk(
  'auth/loginUser',
  async (token, { rejectWithValue }) => {
    try {
      // Perform API request to validate the token or fetch user data
      const response = await axios.post('http://localhost:5000/api/user/validateToken', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Assuming the response contains user data
      return response.data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data); // Handle API errors gracefully
    }
  }
);

// actions/authActions.js

export const checkToken = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
      // Dispatch login action with the stored token
      dispatch(loginUser(token));
  } else {
      // Dispatch logout action if no token is found
      dispatch(logoutUser());
  }
};
